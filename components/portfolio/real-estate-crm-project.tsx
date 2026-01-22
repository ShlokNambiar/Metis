export function RealEstateCRMProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Real Estate
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Multi-Agent CRM Orchestration
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Lead management required too much manual follow-up and coordination.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Metis deployed Autonomous PM, Sales, and Outreach Agents syncing to CRM + email + phone.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>2–3x lead conversion efficiency</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>No leads dropped</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Fully automated client onboarding</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        Agents working together to run the business.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Multi-Agent</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">CRM Integration</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Automation</span>
                </div>
            </div>
            <div className="order-2 md:order-2">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-steel-blue">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>
                        <p className="text-muted-foreground text-sm">Real Estate CRM</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
