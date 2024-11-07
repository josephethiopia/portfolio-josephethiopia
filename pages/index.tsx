
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Yoseph Ashenafi's Portfolio</title>
                <meta name="description" content="Personal portfolio of Yoseph Ashenafi" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Yoseph Ashenafi</h1>
                <p>Full Stack Developer specializing in web technologies and cloud solutions</p>
                
                <section>
                    <h2>Skills</h2>
                    <div>
                        <span key="JavaScript">JavaScript</span>
<span key="TypeScript">TypeScript</span>
<span key="React">React</span>
<span key="Node.js">Node.js</span>
<span key="Express">Express</span>
<span key="Next.js">Next.js</span>
<span key="MongoDB">MongoDB</span>
<span key="AWS">AWS</span>
                    </div>
                </section>

                <section>
                    <h2>Projects</h2>
                    
                        <div key="Portfolio Generator">
                            <h3>Portfolio Generator</h3>
                            <p>An automated tool that generates and deploys developer portfolios</p>
                            <div>
                                <span key="TypeScript">TypeScript</span>
<span key="React">React</span>
<span key="Node.js">Node.js</span>
<span key="GitHub API">GitHub API</span>
                            </div>
                            <a href="https://github.com/josephethiopia/portfolio-generator">GitHub</a>
                            <a href="https://portfolio-generator.vercel.app">Live Demo</a>
                        </div>
                    

                        <div key="E-commerce Platform">
                            <h3>E-commerce Platform</h3>
                            <p>A full-stack e-commerce solution with payment integration</p>
                            <div>
                                <span key="Next.js">Next.js</span>
<span key="MongoDB">MongoDB</span>
<span key="Stripe">Stripe</span>
<span key="AWS">AWS</span>
                            </div>
                            <a href="https://github.com/josephethiopia/ecommerce">GitHub</a>
                            <a href="https://ecommerce-example.com">Live Demo</a>
                        </div>
                    
                </section>
            </main>
        </div>
    )
}
