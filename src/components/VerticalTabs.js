import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import { Container, Grid } from '@mui/material';
import DragDrop, { PictureList } from './DragDrop';
import SearchBar from 'material-ui-search-bar';
import Picture from './Picture';
import { useDrop } from 'react-dnd';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}



TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [board, setBoard] = React.useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id);
        setBoard((board) => [pictureList[0]]);

    };


    return (
        <>
            <Container maxWidth="fixed" style={{ marginTop: '55px' }}>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
                >
                    <Tabs
                        orientation="vertical"
                        // variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider', marginTop: '45px', backgroundColor: '#000', width: '23%' }}
                    >
                        <Tab icon={<ImageIcon />} {...a11yProps(0)} style={{ color: 'white' }} />
                        <Tab icon={<PictureAsPdfIcon />} {...a11yProps(1)} style={{ color: 'white' }} />
                        <Tab icon={<SubscriptionsIcon />} {...a11yProps(2)} style={{ color: 'white' }} />
                        <Tab icon={<CloudUploadIcon />} {...a11yProps(3)} style={{ color: 'white' }} />
                        <Tab icon={<NetworkCheckIcon />} {...a11yProps(4)} style={{ color: 'white' }} />

                    </Tabs>
                    <TabPanel value={value} index={0} style={{ marginTop: '44px', width: '50%', background: "#353131" }}>
                        <h1 style={{ color: 'white' }}>Assets <small style={{ fontSize: "13px" }}>Library</small></h1>

                        <SearchBar /><br /><br />
                        <DragDrop />
                    </TabPanel>
                    <TabPanel value={value} index={1} style={{ marginTop: '44px', width: '50%', background: "#353131" }}>
                        <h1 style={{ color: 'white' }}>Assets <small style={{ fontSize: "13px" }}>Library</small></h1>
                        <SearchBar /><br /><br />
                        <DragDrop />
                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ marginTop: '44px', width: '50%', background: "#353131" }}>
                        <h1 style={{ color: 'white' }}>Assets <small style={{ fontSize: "13px" }}>Library</small></h1>
                        <SearchBar /><br /><br />
                        <DragDrop />
                    </TabPanel>
                    <TabPanel value={value} index={3} style={{ marginTop: '44px', width: '50%', background: "#353131" }}>
                        <h1 style={{ color: 'white' }}>Assets <small style={{ fontSize: "13px" }}>Library</small></h1>
                        <SearchBar /><br /><br />
                        <DragDrop />
                    </TabPanel>
                    <TabPanel value={value} index={4} style={{ marginTop: '44px', width: '50%', background: "#353131" }}>
                        <h1 style={{ color: 'white' }}>Assets <small style={{ fontSize: "13px" }}>Library</small></h1>
                        <SearchBar /><br /><br />
                        <DragDrop />
                    </TabPanel>

                    <div className="common-tab" style={{ marginTop: '90px' }}>
                        <Box
                            sx={{
                                boxShadow: 1,
                                width: '90%',
                                height: 'auto',
                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                color: (theme) =>
                                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                                p: 1,
                                m: 1,
                                borderRadius: 2,
                                textAlign: 'left',
                                fontSize: '0.875rem',
                                fontWeight: '700',
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <div className="Board" ref={drop}>
                                        {board.map((picture) => {
                                            return <Picture url={picture.url} id={picture.id} />;
                                        })}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <h1>Generation</h1>
                                    <p style={{ lineHeight: '30px' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi animi cumque soluta necessitatibus atque labore quo dolorem ut recusandae quia delectus dignissimos, commodi laborum sequi illum. Amet, porro inventore! Minus quos ducimus vero quaerat maiores velit eum fugit eligendi aspernatur repellendus facere veritatis, deleniti hic omnis officia nostrum voluptas inventore?</p>
                                </Grid>
                            </Grid>

                        </Box>
                    </div>
                </Box>
            </Container>

        </>
    );
};
export default VerticalTabs;