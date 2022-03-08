import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  width:90%;
  top: 10%;
  box-shadow: 0px 50px 101px rgba(0, 0, 0, 0.04);
  border-radius:20px;
  padding-bottom:1.5rem;
`;

const Wrap = styled.div`
  background: transparent;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 1.2rem 2rem;
    font-size: 1.8rem;
    color:#702283;
  }
  span {
    margin-right: 1.5rem;
  }
  .minus{
      background:#702283;
      border-radius:50%;
      
  }
  .plus{
    background:#702283;
    border-radius:50%;
    
}
`;

const Dropdown = styled.div`
  background: lightgrey;
  color: black;
 padding-left:4%;
 margin: 0rem 1rem 0rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius:10px;
  p {
    font-size: 1.25rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: 'white', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus className='minus'/> : <FiPlus className='plus'/>}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;