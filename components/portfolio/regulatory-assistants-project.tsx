export function RegulatoryAssistantsProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Regulatory Compliance
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Tax / UDCPR Regulatory Assistants
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Regulated sectors (Tax, CA, UDCPR planning rules) require precise interpretation of documentation. Teams manually read PDFs and circulars to ensure compliance — slow and error-prone.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        Metis built domain-specific regulatory agents that:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Interpret laws, policies, and compliance rules</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Connect case data → automated actions</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Track deadlines and send proactive reminders</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Identify missing documentation and errors</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Generate reports and draft filings</span>
                        </li>
                    </ul>
                    <p className="text-muted-foreground font-light italic mt-3">
                        Designed for high-trust sectors with strong safeguards.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Faster compliance workflows and reduced risk</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Standardized interpretations (no manual inconsistencies)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Higher operational capacity with smaller teams</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        Expertise on demand — automated into execution.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Tax Compliance</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">UDCPR</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Regulatory AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Automation</span>
                </div>
            </div>
            <div className="order-2 md:order-2">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-steel-blue">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <path d="M9 11h6" />
                                <path d="M9 15h6" />
                                <path d="M9 7h6" />
                            </svg>
                        </div>
                        <p className="text-muted-foreground text-sm">Regulatory Compliance Agent</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
