import {APIGatewayProxyHandler}  from 'aws-lambda';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const handler: APIGatewayProxyHandler = async (event) => {
  const body = JSON.parse(event.body!);
  const message = body.message;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify({ reply: completion.choices[0].message.content }),
    };
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
      },
      body: JSON.stringify({ error: 'Error calling OpenAI API' }),
    };
  }
};
