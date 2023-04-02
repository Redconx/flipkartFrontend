import { InputBase, Box, styled , ListItem,List, ListItemAvatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getProducts } from "../../redux/actions/productAction";
import {getMobiles} from "../../redux/actions/mobileAction"
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';


const SearchContainer = styled(Box)`
  background: #fff;
  width: 33%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  width: 100%;
  
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background-color: #FFFFFF;
  color:black;
  margin-top:40px;

`;
const ListItem1=styled(ListItem)`
:hover{background:#2874F0};
padding-top:4px;
padding-bottom:4px;
`


const Search = () => {
  const [text,setText]=useState("")

  const { products } = useSelector((state) => state.getProducts);
  const { mobiles } = useSelector((state) => state.getMobiles);

  // console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getMobiles())
  }, [dispatch]);


  const getText = (text1) => {
    setText(text1);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products,brands and more"
        onChange={(e) => getText(e.currentTarget.value)}
        value={text}
        // onBlur={()=>setText('')}
      />
      <SearchIconWrapper onClick={()=>setText("")}>
        {text ? <ClearIcon/>
        :<Box > <SearchIcon/></Box>
        }
      </SearchIconWrapper>

      {text && (
        <ListWrapper >
          {products
            .filter((prod) =>
              prod.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((pr,ind1) => (
              ind1 < 4?
              <ListItem1 key={pr.id} divider>
                 <ListItemAvatar>
          <img alt="Remy Sharp" src={pr.url} style={{width:20}} />
        </ListItemAvatar>
                <Link
                  to={`/product/${pr.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {pr.title.longTitle}
                </Link>
              </ListItem1>:''
            ))}


            {mobiles && mobiles.filter((mob)=>mob.name.toLowerCase().includes(text.toLowerCase())).map((n,ind2)=>(
              ind2 <4?
              <ListItem1 divider on>
                 <ListItemAvatar>
                    <img alt="Remy Sharp" src={n.img} style={{width:13}} />
                  </ListItemAvatar>
                <Link to={`/mobile/${n.id}`}  onClick={() => setText("")} style={{ textDecoration: "none", color: "inherit" }}>{n.name}
                </Link>
              </ListItem1>:''
            ))}
        </ListWrapper>
      )}
      
    </SearchContainer>
  );
};
export default Search;
