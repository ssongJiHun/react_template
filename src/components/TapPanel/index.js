
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <div style={{marginTop : 2, paddingTop: 30, paddingBottom: 25, paddingLeft : 20, paddingRight : 20, backgroundColor: '#ffffff'}} >
            {children}
          </div>
        )}
      </div>
    );
  }
  export default TabPanel;