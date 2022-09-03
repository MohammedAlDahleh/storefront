import { Tab } from "@mui/material";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { fProducts, reset } from '../../store/products';
import activeCategory from '../../store/categories';

function Categories(props) {
    // console.log({props});
    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tab
                    label="Food"
                    onClick={() => {
                        props.reset();
                        props.activeCategory('food');
                        props.fProducts('food');
                    }}
                />
                <Tab
                    label="Elecronics"
                    onClick={() => {
                        props.reset();
                        props.activeCategory('electronics');
                        props.fProducts('electronics');
                    }}
                />
            </Box>
        </>
    );
}

const mapDispatchToPropse = { activeCategory, reset, fProducts }

export default connect(mapDispatchToPropse)(Categories);