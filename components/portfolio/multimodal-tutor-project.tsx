export function MultimodalTutorProject() {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
                <div className="mb-4">
                    <span className="text-sm font-semibold uppercase tracking-wide" style={{ color: '#1359a0' }}>
                        Education AI
                    </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                    Multimodal AI Tutor (Speech + Vision + Dynamic Content)
                </h3>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground font-light leading-relaxed">
                        Students often lack personalized support. Existing tutors only provide text answers, with no understanding of speech or diagrams, and no adaptiveness to learning style.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground font-light leading-relaxed mb-3">
                        Metis created a multimodal tutoring agent capable of:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Understanding speech, handwriting, screenshots, and diagrams</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Generating custom animations and interactive visuals for learning</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Providing step-wise explanations across subjects</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Continuous progress tracking and tailored difficulty</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Natural conversation interface — like talking to a teacher</span>
                        </li>
                    </ul>
                    <p className="text-muted-foreground font-light italic mt-3">
                        Built using real-time vision + speech + reasoning fused with dynamic UI generation.
                    </p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Higher concept retention through visual explanation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Engaging learning experience for students</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Can scale to thousands of learners simultaneously</span>
                        </li>
                    </ul>
                    <p className="text-foreground font-medium italic mt-4">
                        Not just answers — understanding.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Multimodal AI</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Education</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Vision + Speech</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium">Personalization</span>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <div className="aspect-video bg-muted/30 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-steel-blue">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                <path d="M8 7h8" />
                                <path d="M8 11h8" />
                            </svg>
                        </div>
                        <p className="text-muted-foreground text-sm">AI Tutor Platform</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
