export function RestaurantVoiceProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Hospitality & F&B
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Autonomous Voice Reservation Agent
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Restaurants lost customers due to missed calls during peak hours. Manual bookings caused errors and poor customer experience.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        Fully autonomous voice-first reservation agent with natural conversation, real-time availability checks, and instant confirmations.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>80% reduction in missed calls</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Higher booking conversion and table utilization</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Staff freed from interruptions for better service</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        The restaurant never misses a customer again — even during rush hour.
                    </p>
                </div>

                <div className="flex gap-4">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Voice AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">SIP/VAPI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">24/7 Automation</span>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-steel-blue">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <p className="text-muted-foreground text-sm">Voice Reservation System</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
