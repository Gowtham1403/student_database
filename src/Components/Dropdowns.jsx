import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Dropdowns() {
  return (
    <Dropdown as={ButtonGroup}>
      <Button className='bg-purple-600 border-purple-600' >Choose your semester</Button>

      <Dropdown.Toggle split className='bg-purple-600 border-purple-600' id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Semester 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Semester 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Semester 3</Dropdown.Item>        
        <Dropdown.Item href="#/action-3">Semester 4</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Semester 5</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Semester 6</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Semester 7</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowns;