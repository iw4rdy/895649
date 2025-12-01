import Airtable from 'airtable'

// Initialize Airtable client
// Configure with environment variables or API keys as needed
// Use import.meta.env for Vite, or provide values directly
const apiKey =
  typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env.VITE_AIRTABLE_API_KEY
    : ''
const baseId =
  typeof import.meta !== 'undefined' && import.meta.env
    ? import.meta.env.VITE_AIRTABLE_BASE_ID
    : ''

const base = new Airtable({ apiKey }).base(baseId)

export async function submitToAirtable(
  tableName: string,
  fields: Record<string, unknown>,
): Promise<void> {
  if (!apiKey || !baseId) {
    console.warn(
      'Airtable API key or Base ID is missing. Check VITE_AIRTABLE_API_KEY and VITE_AIRTABLE_BASE_ID.',
    )
    return
  }

  // Airtable typings are fairly strict; we cast here to keep the helper ergonomic.
  await (base(tableName) as any).create([{ fields: fields as any }])
}

export default base

