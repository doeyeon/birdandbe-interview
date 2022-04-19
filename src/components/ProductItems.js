import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Product } from './ProductData';
import './styling.css';
import CheckBoxCart from './CheckBoxCart';
import Box from '@mui/material/Box';
import { Header } from './Header';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const item_array = [];

var eggs_header = "When your eggs need some extra love.";
var eggs_description = "You can't stop the clock, but you can equip your eggs with a prenatal that goes above and beyond. This one's got all the go-tos you'd expect, plus Choline (which most prenatals skip or skimp on) and other powerful antioxidants and ingredients like CoQ10, PQQ and NAC to protect DNA and fend off everyday stressors.";
var sperm_header = "Go for gold at your next swim meet.";
var sperm_description = "Despite being half of the equation, sperm is often overlooked when it comes to prenatals, but it needs Folate too! Get it—and all the essentials such as Choline (which prenatals often skip or skimp on), Selenium, Zinc, Vitamin D and more—in daily doses to take your swimmers to the top of their game.";

let egg_img = Product.products[0].primary_image.url_standard;
let sperm_img = Product.products[1].primary_image.url_standard;

export function ProductItems() {

    const [totalCost, setTotalCost] = useState(0);
    const [orderedItems, setOrderedItems] = useState([]);
    const handleChange = (item, event) => {
        if (event.target.checked){
            setTotalCost((totalCost)=>totalCost+item.price);
            item_array.push(item);
        }
        else{
            setTotalCost((totalCost)=>totalCost-item.price);
            var index = 0;
            if (item.id == 150){
                index = item_array.findIndex(item=>item.id==150);
                if (index > -1) {
                    item_array.splice(index, 1);
                  }
            }
            else {
                index = item_array.findIndex(item=>item.id==151);
                if (index > -1) {
                    item_array.splice(index, 1);
                  }
            }
        }
        console.log(item_array)
    }
    console.log(totalCost)

  return (
    <div>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
        

        <Item>
            <div className='heading_one'>
                <h3>{Product.products[0].name}</h3>
            </div>
            <div className='heading_two'>
                <h4>{eggs_header}</h4>
            </div>
            <div className='heading_three'>
                <p>{eggs_description}</p>
            </div>
            <img src={egg_img}></img>
            <CheckBoxCart item={Product.products[0]} handleChange={handleChange}/>
        </Item>



        <Item>
            <div className='heading_one'>
                <h3>{Product.products[1].name}</h3>
            </div>
            <div className='heading_two'>
                <h4>{sperm_header}</h4>
            </div>
            <div className='heading_three'>
                <p>{sperm_description}</p>
            </div>
            <img src={sperm_img}></img>
            <CheckBoxCart item={Product.products[1]} handleChange={handleChange}/>
        </Item>
      </Stack>
      
      <div className='total-cost'>
          <p>Order Total: ${totalCost} USD</p>
        </div>

    </div>
  );
}