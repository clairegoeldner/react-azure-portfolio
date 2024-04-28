export function Projects({projects}) {
    const categories = projects.map(project => project.category).filter((category, index, array) => index === array.indexOf(category));

    return (
        <section className = "center">
            <article>
                <h1>Projects</h1>
                <p>I have completed a variety of projects in multiple programming languages, including HTML/CSS/JavaScript and Python:</p>
                <nav className="verticalNavigation">
                    <ul>
                        {
                            categories.map(category => (
                                <li key={category.split(/\s/g).join("")}>
                                    <a href={"#" + category.split(/\s/g).join("")}>{category}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <section className="projects">
                    {
                        categories.map(category => (
                            <>
                                <h2 key={category.split(/\s/g).join("")}>{category}</h2>
                                {
                                    projects.filter(project => project.category === category).map(project => (
                                        <div key={project.name.split(/\s/g).join("")}>
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    ))
                                }
                            </>
                        ))
                    }
                </section>
            </article>
            <br /><a href="#top" className="toTop">To Top</a>
        </section>
    );
}