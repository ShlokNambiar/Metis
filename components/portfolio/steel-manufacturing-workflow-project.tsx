export function SteelManufacturingWorkflowProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-2">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Manufacturing
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    AI Workforce for Steel Manufacturing
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Operational decisions were slow due to communication silos.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Metis delivered departmental AI agents (PM → Dev → Ops) that communicate internally and take decisions on production steps.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Continuous operations</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Increased throughput accuracy</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Management visibility into every action</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        AI that doesn't just analyze — it operates.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Operations</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Multi-Agent</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Decision-Making</span>
                </div>
            </div>
            <div className="order-1 md:order-1">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-steel-blue">
                                <rect x="2" y="7" width="20" height="14" rx="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                        </div>
                        <p className="text-muted-foreground text-sm">Manufacturing Operations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
