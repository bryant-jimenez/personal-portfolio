import { Col, Container, Row, Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import coolRef from "../assets/img/cool-ref.png";
import ps1 from "../assets/img/PhotoShare1-142.png";
import ps2 from "../assets/img/PhotoShare2-142.png";
import ps3 from "../assets/img/PhotoShare3-142.png";
import stsh from "../assets/img/stsh.png"

export const Projects = () => {
    const coolCompiler= [
        {
          title: "COOL Compiler",
          description: "C/C++/Flex/Bison",
          details: "Implemented lexical analyzer using flex by writing rules that match on user-defined regular expressions and perform a specified action for each matched pattern.",
          imgUrl: coolRef,
        },
        {
            details: "Wrote parser for COOL language utilizing bison parser generator to output an abstract syntax tree (AST). Using AST, implemented semantic analyzer for COOL that manages naming and scoping, type checking, and full error message generation for erroneous programs. ",
            imgUrl: coolRef,
            },
        {
            details: "Annotates AST with types for code generation. Wrote code generator that emits decides the object layout for each class, then recursively generates stack machine code for each expression. Produces MIPS assembly code for any proper COOL program.",
            imgUrl: coolRef,
        }
      ];

      const photoShare = [
        {
          title: "PhotoSharing Web App",
          description: "HTML/CSS/JS/React",
          imgUrl: ps1,
        },
        {
          details: "PhotoSharing website where users can log in, register, upload photos, and view other user’s details and photos. Can like, comment, and @mention other users on any user's pictures.",
          imgUrl: ps2,
        },
        {
            details: "Interactions through the browser generate REST API calls to the backend (MongoDB) to retrieve and populate data, which are then rendered on the front end through REST API.",
            imgUrl: ps3,
        },
      ];

      const stanfordShell = [
        {
            title: "Stanford Shell",
            description: "C/C++",
            imgUrl: stsh,
        },
        {
            details: "Extended simple shell to support process control, job lists, signals, pipelines, and I/O redirection. ",
            imgUrl: stsh,
        },
        {
            details: "Utilizes multithreading techniques such as mutexes and semaphores to support commands like quit, bg, fg, exit, jobs, halt, slay, cont.",
            imgUrl: stsh,
        },
      ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Personal Projects and Coursework</p>
                        <TabContainer id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <   Nav.Link eventKey="first">COOL Compiler</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">PhotoSharing Web App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <   Nav.Link eventKey="third">Stanford Shell</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        <TabContent>
                            <TabPane eventKey="first">
                                <Row>
                                    {
                                        coolCompiler.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey="second">
                                <Row>
                                    {
                                        photoShare.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                            <TabPane eventKey="third">
                                <Row>
                                    {
                                        stanfordShell.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </TabPane>
                        </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}