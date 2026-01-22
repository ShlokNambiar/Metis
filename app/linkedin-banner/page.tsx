"use client"

export default function LinkedInBanner() {
    return (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-8">
            <div className="text-center mb-8">
                <p className="text-white/60 text-sm mb-4">LinkedIn Banner (1584 x 396px) - Right-click to save or screenshot</p>

                {/* LinkedIn Banner - 1584 x 396 aspect ratio */}
                <div
                    className="relative overflow-hidden"
                    style={{
                        width: '1584px',
                        height: '396px',
                        background: '#0f0f0f'
                    }}
                >

                    {/* Content Container - Centered with offset for profile pic */}
                    <div className="relative h-full flex items-center justify-center">

                        {/* Centered Content */}
                        <div className="flex items-center gap-12 ml-32">
                            {/* Metis Logo */}
                            <div className="flex flex-col items-center gap-2">
                                <svg width="56" height="67" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="6" r="6" fill="#1359a0" />
                                    <circle cx="8" cy="22" r="6" fill="#1359a0" />
                                    <circle cx="32" cy="22" r="6" fill="#1359a0" />
                                    <circle cx="20" cy="42" r="6" fill="#1359a0" />
                                    <line x1="20" y1="12" x2="20" y2="18" stroke="#1359a0" strokeWidth="3" />
                                    <line x1="14" y1="22" x2="26" y2="22" stroke="#1359a0" strokeWidth="3" />
                                    <line x1="12" y1="26" x2="18" y2="36" stroke="#1359a0" strokeWidth="3" />
                                    <line x1="28" y1="26" x2="22" y2="36" stroke="#1359a0" strokeWidth="3" />
                                    <circle cx="20" cy="22" r="4" fill="#1359a0" />
                                </svg>
                                <span
                                    className="text-xl font-bold tracking-[0.2em] text-white"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    METIS
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-20 bg-white/20" />

                            {/* Tagline */}
                            <div className="text-center">
                                <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-2">
                                    Autonomous AI Agents
                                </p>
                                <p
                                    className="text-white text-3xl font-bold tracking-tight italic"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    Intelligence in motion.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-20 bg-white/20" />

                            {/* Contact Info */}
                            <div className="text-left">
                                <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">
                                    Get in Touch
                                </p>
                                <div className="space-y-1">
                                    <p className="text-white text-base font-light tracking-wide">
                                        shlok.nambiar@gmail.com
                                    </p>
                                    <p className="text-white/60 text-base font-light tracking-wide">
                                        +91 9075311677
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        style={{
                            background: 'linear-gradient(90deg, transparent 0%, #1359a0 50%, transparent 100%)'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
