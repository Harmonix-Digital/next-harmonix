import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { z } from 'zod';
import axios from 'axios';
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

// -------------------- Create MCP Server --------------------
const server = new McpServer({
    name: 'GHL_MCP_Server',
    version: '1.0.0'
});

// -------------------- Register Tool: Add Contact --------------------
server.registerTool(
    'add_contact_to_GHL',
    {
        title: 'Add contact to GHL CRM',
        description: 'Adds a contact to GHL CRM using API key and location ID.',
        inputSchema: z.object({
            apiKey: z.string(),
            locationId: z.string(),
            contact: z.object({
                name: z.string(),
                email: z.string().optional(),
                phone: z.string().optional(),
                companyName: z.string().optional()
            })
        }),
        outputSchema: z.object({
            success: z.boolean(),
            data: z.any()
        })
    },
    async (input) => {
        const { apiKey, locationId, contact } = input;
        console.log("Received data:", input);

        try {
            const response = await axios.post(
                'https://services.leadconnectorhq.com/contacts/',
                {
                    firstName: contact.name,
                    lastName: "",
                    email: contact.email,
                    companyName: contact.companyName,
                    phone: contact.phone,
                    locationId
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Version': '2021-07-28',
                        'Authorization': `Bearer ${apiKey}`
                    },
                    maxBodyLength: Infinity
                }
            );

            console.log("GHL API response:", response.data);

            return {
                content: [{ type: "text", text: "Successfully added contact" }],
                structuredContent: {
                    success: true,
                    data: response.data
                }
            };
        } catch (error) {
            console.error("Error adding contact:", error.response?.data || error.message);

            return {
                content: [{ type: "text", text: "Failed to add contact" }],
                structuredContent: {
                    success: false,
                    error: error.response?.data || error.message
                }
            };
        }
    }
);

// -------------------- Register Tool: Add Numbers --------------------
server.registerTool(
    'add_numbers',
    {
        title: 'Addition Tool',
        description: 'Add two numbers',
        inputSchema: z.object({ a: z.number(), b: z.number() }),
        outputSchema: z.object({ result: z.number() })
    },
    async ({ a, b }) => {
        const output = { result: a + b };
        return {
            content: [{ type: 'text', text: `Result: ${output.result}` }],
            structuredContent: output
        };
    }
);

// -------------------- Express Setup --------------------
const app = express();
app.use(express.json());

// Single MCP transport for all requests
const transport = new StreamableHTTPServerTransport({
    enableJsonResponse: true
});
server.connect(transport);

// MCP endpoint
app.post('/mcp', async (req, res) => {
    try {
        await transport.handleRequest(req, res, req.body);
    } catch (err) {
        console.error("MCP transport error:", err);
        res.status(500).json({ error: String(err) });
    }
});

// Health Check
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'GHL MCP Server is running',
        version: '1.0.0',
        endpoints: { mcp: '/mcp', health: '/' }
    });
});

// -------------------- Start Server --------------------
const port = parseInt(process.env.PORT || '3002', 10);
app.listen(port, () => {
    console.log(`GHL MCP Server running at http://localhost:${port}/mcp`);
});
