export function PortfolioHero() {
    return (
        <section className="py-32 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in" style={{ color: '#1359a0' }}>
                    Our Work
                </p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
                    Building the future <span className="whitespace-nowrap">with AI.</span>
                </h1>
                <p
                    className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed animate-fade-in"
                    style={{ animationDelay: "0.1s" }}
                >
                    Explore our portfolio of AI agent implementations across industries—from quantitative trading to real estate operations.
                </p>
            </div>
        </section>
    )
}
