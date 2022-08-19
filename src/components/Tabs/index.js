import React from 'react';
import MuiTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from 'src/components/TapPanel'

const Tabs = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const style = {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginRight: 5,
        width: '142px',
        height: '37px',
        fontSize: '14px',
        fontWeight: 'bold'
    };

    return (
        <div>
            <MuiTabs value={value} onChange={handleChange} >
                {
                    props.tabData.map((data, i) => (
                        <Tab key={i} label={data.label} sx={style} />
                    ))
                }
            </MuiTabs>

            {
                props.tabData.map((data, i) => (
                    <TabPanel key={i} value={value} index={i} >
                        {data.panel}
                    </TabPanel>
                ))
            }
        </div>

    );
}

export default Tabs;
