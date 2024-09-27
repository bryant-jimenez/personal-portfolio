import { Col, Container, Row, Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import prismaIcon from "../assets/img/prismaIcon.png"
import coolRef from "../assets/img/cool-ref.png";
import ps1 from "../assets/img/PhotoShare1-142.png";
import ps2 from "../assets/img/PhotoShare2-142.png";
import ps3 from "../assets/img/PhotoShare3-142.png";
import stsh from "../assets/img/stsh.png"

export const Projects = () => {
    const prisma= [
        {
          title: "PRISMA - Push Notifications",
          description: "Swift, Python, Firebase",
          details: "Developed push notifications for LLM agent iOS application to promote physical behavior change, utilizing OpenAI API and Firebase Cloud Messaging, allowing users to set fixed and context-dependent notifications related to their health data.",
          imgUrl: prismaIcon,
        },
        {
            details: "Engineered listener-based, server-side scheduling module in Python using APScheduler package for notification schedules based on changes to user database.",
            imgUrl: prismaIcon,
        },
        {
            details: "Implemented unit testing for Python backend server by employing Pytest, resulting in a significant reduction in post-deployment errors by 65%.",
            imgUrl: prismaIcon,
        },
        {
            details: "Architected bulk data handling for open-source SpeziHealthKit module using Apple HealthKit API, implementing batch data retrieval and task parallelization for efficient processing, eliminating lost user health data during upload by 90% for 30+ users.",
            imgUrl: prismaIcon,
        },
      ];

    const coolCompiler= [
        {
          title: "COOL Compiler",
          description: "C/C++/Flex/Bison",
          details: "Implemented lexical analyzer using flex by writing rules that match on user-defined regular expressions and perform a specified action for each matched pattern.",
          imgUrl: coolRef,
        },
        {
            details: "Wrote parser for COOL language utilizing bison parser generator to output an abstract syntax tree (AST). Using AST, implemented semantic analyzer for COOL that manages naming and scoping, type checking for 23+ types, 20+ smbols, classes, methods, and objects, and full error message generation for erroneous programs. ",
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
                        <h3> </h3>
                        <TabContainer id="projects-tabs" defaultActiveKey="second">
                            <Nav variant="pills" className="nav-pills-featured mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="second">PRISMA</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="second">
                                    <Row className="proj-imgbx-featured" sm={5} md={4} lg={2}>
                                        {
                                            prisma.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                        <TabContainer id="projects-tabs" defaultActiveKey="second">
                            <Nav variant="pills" className="nav-pills-featured mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="second">COOL Compiler</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="second">
                                    <Row className="proj-imgbx-featured" sm={5} md={4} lg={3}>
                                        {
                                            coolCompiler.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                        <TabContainer id="projects-tabs" defaultActiveKey="second">
                            <Nav variant="pills" className="nav-pills-featured mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="second">PhotoSharing Web App</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="second">
                                    <Row className="proj-imgbx-featured" sm={5} md={4} lg={3}>
                                        {
                                            photoShare.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </TabContainer>
                        <TabContainer id="projects-tabs" defaultActiveKey="second">
                            <Nav variant="pills" className="nav-pills-featured mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Stanford Shell</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <TabContent>
                                <TabPane eventKey="second">
                                    <Row className="proj-imgbx-featured" sm={5} md={4} lg={3}>
                                        {
                                            stanfordShell.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
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