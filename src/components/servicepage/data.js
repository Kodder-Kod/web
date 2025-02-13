

import * as React from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { IoWifiSharp } from "react-icons/io5";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanIcon from '@mui/icons-material/Lan';
import WebIcon from '@mui/icons-material/Web';
import { FaHandsHelping } from "react-icons/fa";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EngineeringIcon from '@mui/icons-material/Engineering';

import CategoryCard from  "../../components/client/page";
import BarChartIcon from '@mui/icons-material/BarChart';

import DataArrayIcon from '@mui/icons-material/DataArray';


import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

// react plugin used to create charts
 
// reactstrap components
import {
    //  Button,
    // Card,
    // CardHeader,
    //  CardBody,
    CardFooter,
    //  CardTitle,
    ListGroupItem,
    ListGroup,
    // Container,
    // Row,
    // Col,
} from "reactstrap";

import {
    //Container,
    //Card,
    CardContent,
    Typography,
    Grid,
    // Button,
    Box,
    AvatarGroup,
    Avatar,
    Alert
} from "@mui/material";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    CardTitle,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
} from "reactstrap";
// core components

import { Stack } from "@mui/system";
import ExamplesNavbar from  "../../components/Navbars/ExamplesNavbar.js";
import Footer from  "../../components/Footer/Footer.js";
import Services from  '../../components/PageHeader/Services';
import IndexNavbar from  '../../components/Navbars/IndexNavbar';
import ContactApi from  '../../components/PageHeader/Contact';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import AddchartIcon from '@mui/icons-material/Addchart';
import StorageIcon from '@mui/icons-material/Storage';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

const CATEGORIES = [
    {
        img: "#",
        icon: <AiFillAndroid />,
        title: "Frontend Web Development",
        desc: "300 Courses",
    },
    {
        img: '../image/blogs/blog-12.jpeg',
        icon: <AiFillAndroid />,
        title: "Backend Web Development",
        desc: "200 Courses",
    },
    {
        img: './image/blogs/blog-10.jpeg',
        icon: <AiFillAndroid />,
        title: "Web Security & Performance",
        desc: "240 Courses",
    },
    {
        img: '../image/blogs/blog-13.png',
        icon: <AiFillAndroid />,
        title: "Full-Stack Web Development",
        desc: "100 Courses",
    },
];



const items = [
    {
        icon: <BarChartIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Analysis',
        pin: "/services/data/analysis",
        description:
            "Uncover insights, trends, and more,  With data analysis, explore and soar."
    },
    {
        icon: <DataArrayIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Entry',
        pin: "/services/data/entry",
        description:
            "Organize data with a precise touch,  For accurate entry, we’ll do so much."
    },
    {
        icon: <StorageIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Management',
        pin: "/services/data/management",
        description:
            "Store and manage with ease and grace,  Our solutions keep data in place."
    },
    {
        icon: <MoveDownIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Migration',
        pin: "/services/data/migration",
        description:
            "Seamlessly move your data with care,  Migration that’s smooth, beyond compare."
    },
    {
        icon: <CloudSyncIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Recovery',
        pin: "/services/data/recovery",
        description:
            "Recover your data, no need to fear,  With our help, it’s always near."
    },
    {
        icon: <AddchartIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Data Science',
        pin: "/services/data/science",
        description:
            "Explore data’s secrets, vast and deep,  With data science, knowledge we’ll reap."
    },
];

const Data = () => {

    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("landing-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="page-header">
                <img
                    alt="..."
                    className="path"
                     src={require("../../assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                     src={require("../../assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                     src={require("../../assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                     src={require("../../assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                     src={require("../../assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                     src={require("../../assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h1 className="text-white">
                                Data Management and Data Science
                            </h1>
                            <p className="text-white mb-3">
                                Data management and data science are crucial for businesses to leverage their data effectively. These fields involve collecting, storing, processing, and analyzing data to extract valuable insights and make informed decisions. This guide provides an overview of various categories within data management and data science, focusing on Data Analysis, Data Entry, Data Management, Data Migration, Data Recovery, and Data Science.
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                    Order Now
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    size="sm"
                                >
                                    <i className="tim-icons icon-minimal-right" />
                                </Button>
                            </div>
                            <div className="btn-wrapper">
                                <div className="button-container">
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-dribbble" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-facebook" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img
                                alt="..."
                                className="img-fluid"
                                 src={require("../../assets/img/services/database.png")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>



            <section id="#Services">
                <Box
                    id="highlights"
                    sx={{
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 16 },
                        color: 'white',


                    }}
                >
                    <Container
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 3, sm: 6 },
                        }}
                    >


<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
    <h3 className="sm:text-4xl font-semibold text-white text-center" style={{ fontSize: 30, fontWeight: "bold" }}>
        Data Management & Data Science
    </h3>
    <h3 className="sm:text-xl font-semibold text-white text-center mb-5" style={{ fontSize: 16 }}>
        Unlock the full potential of your data with our advanced data management and data science services. From meticulous data collection and storage to insightful analysis and recovery, we cover every aspect to help you make data-driven decisions. Our expertise spans Data Analysis, Data Entry, Data Management, Data Migration, and Data Recovery, providing you with the tools to turn data into actionable insights and drive business success.
    </h3>
</div>


                        <Grid container spacing={1}>
                            {items.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Stack
                                        direction="column"
                                        color="inherit"
                                        component={Card}
                                        spacing={1}
                                        useFlexGap
                                        sx={{
                                            p: 3,
                                            height: '90%',
                                            border: '1px solid',
                                            borderColor: '#5e72e4',
                                            background: 'transparent',
                                            borderRadius: 15,
                                            backgroundColor: 'grey.900',
                                        }}
                                    >

                                        <NavLink href={item.pin}  >
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Box>{item.icon} </Box>
                                            </div>

                                            <div style={{ marginBottom: 15 }}>

                                                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>

                                                    <Typography fontWeight="Bold" gutterBottom>
                                                        {item.title}
                                                    </Typography>

                                                </div>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Typography variant="body2" sx={{ color: 'grey.400', }} style={{ fontStyle: "light" }} >
                                                    {item.description}
                                                </Typography>
                                            </div>
                                            <div style={{ marginTop: 20 }}>
                                                <NavLink href={item.pin} style={{ color: "#00bbff", }} >
                                                    Read More  ...
                                                </NavLink>
                                            </div>
                                        </NavLink>

                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

            </section>

            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                                <h1 className="text-center">Your best benefit</h1>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <PersonAddIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Informed Decision-Making</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            By collecting, storing, processing, and analyzing data, businesses can extract valuable insights that facilitate informed decision-making. This leads to strategic advantages and better outcomes.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <EngineeringIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Efficiency and Optimization</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Effective data management streamlines processes such as data entry, migration, and recovery, enhancing operational efficiency and optimizing resources.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>

                                            <PsychologyIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Innovation and Competitive Edge</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Leveraging data science techniques allows businesses to innovate products and services based on data-driven insights, gaining a competitive edge in their industry.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


          



            <ContactApi />

            <Footer />
        </>
    )
}


export default Data