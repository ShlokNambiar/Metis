import { getAssetPath } from "@/lib/utils"

export function RestaurantVoiceAgentProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Voice AI
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Autonomous Restaurant Reservation Voice Agent
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Restaurants were losing revenue because staff couldn't answer all incoming calls, especially during peak hours. Manual entry caused mistakes and bad guest experiences.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        Metis built a fully autonomous, voice-first reservation agent that:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Answers calls 24/7 with natural conversation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Checks real-time table availability and restaurant logic</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Confirms, modifies, or cancels bookings instantly</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Sends SMS/WhatsApp confirmations</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Handles group seating and special requests</span>
                        </li>
                    </ul>
                    <p className="text-muted-foreground font-light italic mt-3">
                        Powered by SIP + VAPI pipeline and fast reasoning → action loops.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>80% fewer missed calls</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Higher booking conversion & table utilization</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Staff focus on guests, not phones</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Consistent service with zero training cost</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        The restaurant never misses a customer again — even during rush hour.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Voice AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">SIP/VAPI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Real-time</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Automation</span>
                </div>
            </div>
            <div className="order-2 md:order-2">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border overflow-hidden relative">
                    {/* Light mode image */}
                    <img
                        src={getAssetPath("/voice-agent-light.png")}
                        alt="Voice AI interface with glowing orb - light mode"
                        className="w-full h-full object-cover dark:hidden"
                    />
                    {/* Dark mode image */}
                    <img
                        src={getAssetPath("/voice-agent-dark.png")}
                        alt="Voice AI interface with glowing orb - dark mode"
                        className="w-full h-full object-cover hidden dark:block"
                    />
                </div>
            </div>
        </div>
    )
}
