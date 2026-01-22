export function SteelManufacturingAIProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-2">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Industrial Manufacturing
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    AI Product Manager Agent — Steel Manufacturing Operations
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Steel production planning is high-stakes and fast-changing. Delays in materials, equipment issues, or shift-level breakdowns cause production bottlenecks, increased costs, and miscommunication. Traditional MES/ERP systems log data but don't take action.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        Metis deployed an AI Product Manager Agent that:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Ingests live factory signals and uses RAG-based operational knowledge</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Assigns tasks to Dev & Ops agents and tracks progress</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Makes autonomous SIP calls to supervisors, vendors, and staff</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Updates ERP systems, sends alerts, and monitors KPIs</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Real-time production visibility and proactive risk management</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Reduced manual escalations and faster issue resolution</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>24/7 autonomous operations with full auditability</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        Always on, designing, orchestrating, and driving the workflow.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Manufacturing</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">AI Agent</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Voice AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Workflow Automation</span>
                </div>
            </div>
            <div className="order-1 md:order-1">
                <div className="aspect-video bg-background rounded-lg border border-border p-8 overflow-y-auto">
                    <div className="flex flex-col items-center space-y-4">
                        {/* Production Signals */}
                        <div className="w-full max-w-xs text-center">
                            <div className="px-4 py-3 bg-muted/50 rounded-lg border border-border">
                                <p className="text-sm font-semibold text-foreground">Production Signals & Factory Data</p>
                                <p className="text-xs text-muted-foreground mt-1">availability, delays, shift data, equipment</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="text-steel-blue">↓</div>

                        {/* Sensing */}
                        <div className="px-6 py-3 bg-steel-blue/10 rounded-lg border border-steel-blue/30">
                            <p className="text-sm font-semibold text-foreground">Sensing (Ingest)</p>
                        </div>

                        <div className="text-steel-blue text-xs">Structured Observations</div>
                        <div className="text-steel-blue">↓</div>

                        {/* Knowledge & RAG */}
                        <div className="px-6 py-3 bg-steel-blue/10 rounded-lg border border-steel-blue/30">
                            <p className="text-sm font-semibold text-foreground">Knowledge & RAG</p>
                            <p className="text-xs text-muted-foreground">SOPs, rules, compliance</p>
                        </div>

                        <div className="text-steel-blue text-xs">Context + Constraints</div>
                        <div className="text-steel-blue">↓</div>

                        {/* Planning & Reasoning */}
                        <div className="px-6 py-3 bg-steel-blue/20 rounded-lg border border-steel-blue/40">
                            <p className="text-sm font-semibold text-foreground">Planning & Reasoning</p>
                            <p className="text-xs text-muted-foreground">Goal-driven PM logic</p>
                        </div>

                        <div className="text-steel-blue text-xs">Action Plan</div>
                        <div className="text-steel-blue">↓</div>

                        {/* Agent Collaboration */}
                        <div className="px-6 py-3 bg-steel-blue/10 rounded-lg border border-steel-blue/30">
                            <p className="text-sm font-semibold text-foreground">Internal Agent Collaboration</p>
                            <p className="text-xs text-muted-foreground">PM → Dev Agent → Ops Agent</p>
                        </div>

                        <div className="text-steel-blue text-xs">Execution Commands</div>
                        <div className="text-steel-blue">↓</div>

                        {/* Three outputs */}
                        <div className="grid grid-cols-3 gap-3 w-full max-w-2xl">
                            <div className="px-3 py-2 bg-muted/50 rounded border border-border text-center">
                                <p className="text-xs font-semibold text-foreground">System Actuation</p>
                                <p className="text-xs text-muted-foreground mt-1">ERP, tickets</p>
                            </div>
                            <div className="px-3 py-2 bg-muted/50 rounded border border-border text-center">
                                <p className="text-xs font-semibold text-foreground">Human Coordination</p>
                                <p className="text-xs text-muted-foreground mt-1">emails, updates</p>
                            </div>
                            <div className="px-3 py-2 bg-muted/50 rounded border border-border text-center">
                                <p className="text-xs font-semibold text-foreground">Voice Calls</p>
                                <p className="text-xs text-muted-foreground mt-1">auto-dials staff</p>
                            </div>
                        </div>

                        <div className="text-steel-blue">↓</div>

                        {/* Monitoring */}
                        <div className="px-6 py-3 bg-muted/50 rounded-lg border border-border">
                            <p className="text-sm font-semibold text-foreground">Monitoring & Feedback</p>
                            <p className="text-xs text-muted-foreground">KPIs: risk, delay, throughput</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
