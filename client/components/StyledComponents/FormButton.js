import styled from 'styled-components';

export const FormButton = styled.button`
  padding: 15px 20px;
  border-radius: 3px;
  z-index: 1;
  background-color: ${p => p.theme.backgroundColor};
  border: 1px solid ${p => p.theme.borderColor};
  cursor: pointer;
  color: ${p => p.theme.color};
  font-size: 18px;
  font-weight: ${p => p.fontWeight ? p.fontWeight : '500'};
  width: 100%;
  margin: ${p => p.btnMargin ? p.btnMargin : '30px 0 10px'};
  outline: none;
  font-family: 'IBM Plex Sans', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    color: ${p => p.theme.hoveredColor};
    background-color: ${p => p.theme.hoveredBackgroundColor};
    border: 1px solid ${p => p.theme.hoveredBorderColor};
  }
  
   &.save_announce {
    margin: 0px;
    height: 50px;
    font-weight: 400;
  }
  
  &.modal_btn {
    width: auto;
    margin: 0;
    padding: 12px 25px;
    font-weight: 400;
  }
  
  &.list_new_property_get_started {
    width: 125px;
    margin: 0 0 0 25px;
    padding: 13px 15px;
  }
  
  &.form_dashboard_btn {
    width: auto;
    margin: 25px 0 5px 20px;
    font-weight: 400;
    
    &.disabled {
      background-color: #dbe5ea;
      border: 1px solid #dbe5ea;
      color: #7895a3;
    }
  }
`;
