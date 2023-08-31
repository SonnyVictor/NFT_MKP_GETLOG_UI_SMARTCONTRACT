import { WapperExample, BoxImg } from "./style";

const Examples = () => {
  return (
    <WapperExample>
      <h1>Examples</h1>
      <BoxImg>
        {ListExample.map((item , index)=>{
            return(              
                <img key={index} src={item.img} alt={''}/>
            )
        })}
      </BoxImg>
    </WapperExample>
  );
};
export default Examples;

const ListExample = [
    {
        img: '/images/Mint/example/1.png',
    },
    {
        img: '/images/Mint/example/2.png',
    },
    {
        img: '/images/Mint/example/3.png',
    },
    {
        img: '/images/Mint/example/4.png',
    },
    {
        img: '/images/Mint/example/5.png',
    },
    {
        img: '/images/Mint/example/6.png',
    },
]
