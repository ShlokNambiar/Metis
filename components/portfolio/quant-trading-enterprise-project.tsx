export function QuantTradingEnterpriseProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Financial Markets
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Quantitative AI Trading & Risk-Automation System
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Manual market screening and risk management limited trading desk scalability.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Quantitative AI portfolio engine with autonomous signal generation, multi-agent decision-making, and risk-aware execution.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Disciplined execution without emotional bias</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Faster trade cycles with increased opportunity capture</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Institutional-grade analytics and full transparency</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        From market noise to measurable alpha — autonomously.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Quant Trading</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Risk Management</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">ML/AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Real-time Data</span>
                </div>
            </div>
            <div className="order-2 md:order-2">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border overflow-hidden">
                    <img
                        src="/quant-trading-dashboard.png"
                        alt="AI Trading Dashboard showing active positions, trade history, and equity curve"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
