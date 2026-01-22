import { getAssetPath } from "@/lib/utils"

export function LegalRAGProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-2">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Legal Tech
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Legal RAG Assistant (Document-Aware Case Automation)
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Law firms struggled to retrieve case history quickly. PDFs and filings were unstructured, and manual search wasted billing hours.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        Metis delivered a secure retrieval-augmented assistant that:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Ingests confidential case documents</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Extracts structure from legal filings</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Provides instant citations, prior notes, and relevant laws</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Drafts summaries and follow-ups automatically</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Logs every action for auditability</span>
                        </li>
                    </ul>
                    <p className="text-muted-foreground font-light italic mt-3">
                        Built with secure RAG + state governance for legal compliance.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Research time cut by 60–70%</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Accurate references reduce drafting mistakes</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Better hearing preparation & documentation trails</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        Knowledge that argues back — instantly and securely.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">RAG</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Legal AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Document Processing</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Compliance</span>
                </div>
            </div>
            <div className="order-1 md:order-1">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border overflow-hidden">
                    <img
                        src={getAssetPath("/legal-rag-workflow.png")}
                        alt="Legal RAG workflow diagram showing document processing and case automation"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
