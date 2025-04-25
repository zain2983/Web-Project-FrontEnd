// src/pages/Blog.tsx
import ShareButton from '../components/ShareButton';

function Blog() {
  const article1Url = 'https://medium.com/@hamzaahmad6292/llm-based-schema-mapping-for-automated-crm-integration-c4837d1b1ed5'; // Replace with actual URL
  const article2Url = 'https://medium.com/@mammarali2002/building-an-ai-business-reporting-agent-a-technical-deep-dive-6198a2af80aa'; // Replace with actual URL

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>

      <div className="bg-[#272727] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">LLM-Based Schema Mapping for Automated CRM Integration</h2>
        <p className="text-gray-400 mb-4">
          This article explores how LLMs can be leveraged for automatic schema mapping between client CRM data and internal systems, reducing manual data engineering work and speeding up integrations.
        </p>
        <div className="flex justify-between items-center"> {/* Flex container for alignment */}
          <a 
            href={article1Url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read the full article on Medium
          </a>
          <ShareButton url={article1Url} title="Check out this article on LLM-Based Schema Mapping!" />
        </div>
      </div>

      <div className="bg-[#272727] rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Building an AI Business Reporting Agent</h2>
        <p className="text-gray-400 mb-4">
          A technical deep dive into how we built an automated agent that generates comprehensive business reports from structured data. Includes language model prompting, pipeline orchestration, and integration strategies.
        </p>
        <div className="flex justify-between items-center"> {/* Flex container for alignment */}
          <a 
            href={article2Url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Read the full article on Medium
          </a>
          <ShareButton url={article2Url} title="Check out this article on Building an AI Business Reporting Agent!" />
        </div>
      </div>
    </div>
  );
}

export default Blog;