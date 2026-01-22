import { getAssetPath } from "@/lib/utils"

export function GovernmentLitigationProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-2">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Government Tech
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Government Litigation & Case Management System (AI-Enabled)
                </h3>

                <div className="mb-6">
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Designed and architected an AI-enabled Litigation and Case Management System for government use, built to help senior officials efficiently manage legal cases, hearings, documents, and deadlines from a single centralized dashboard.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Key Capabilities</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        The system supports end-to-end case lifecycle management:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Case tracking and hearing scheduling</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Document handling and automated reminders</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Integration with online hearing platforms (e.g., Google Meet)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>AI agents that automatically join hearings</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Structured meeting notes and concise summary generation</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Architecture</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        The platform is designed with a modular, agent-based architecture, auditability, and scalability in mind, making it suitable for high-stakes government workflows where reliability, transparency, and efficiency are critical.
                    </p>
                    <p className="text-foreground font-medium italic mt-4">
                        Government-grade intelligence for legal case management.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">AI Agents</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Case Lifecycle Management</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Online Hearing Intelligence</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Workflow Automation</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Government-Grade System Design</span>
                </div>
            </div>
            <div className="order-1 md:order-1">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border overflow-hidden">
                    <img
                        src={getAssetPath("/government-litigation-dashboard.png")}
                        alt="Government Litigation & Case Management System Dashboard showing case management, multi-user access, and subdivision dashboards"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
