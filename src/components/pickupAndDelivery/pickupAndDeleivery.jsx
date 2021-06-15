import { useState } from 'react'
import AddTaskBtn from '../addTaskBtn/addTaskBtn'
import { Collapse } from 'antd';
import './styles.scss'
import CreateTaskForm from '../createTaskForm/createTaskForm';
import { v4 as uuid } from 'uuid';


const PickupAndDelivery = () => {
  const { Panel } = Collapse;
  

  // STATE FOR PICK UP TASK
  const [pickupTasks, setPickupTasks] = useState([])

  // FUNCTION FOR ADDING MORE PICK UP TASK
  const addPickupTask = () => {
    setPickupTasks((oldValue) => [...oldValue, {id: uuid(), name: 'Pickup form'}])
  }

  // FUNCTION FOR REMOVING PICKUP TASK
  const removePickupTask = (id) => {
    setPickupTasks(pickupTasks.filter(pickup => pickup.id !== id))
  }


  // STATE FOR DELIVERY TASK
  const [deliveryTasks, setDeliveryTask] = useState([])

  // FUNCTION FOR ADDING MORE DELIVERY TASK
  const addDliveryTask = () => {
    setDeliveryTask((oldValue) => [...oldValue, {id: uuid(), name: 'Delivery form'}])
    console.log(deliveryTasks);
  }

  // FUNCTION FOR REMOVING PICKUP TASK
  const removeDeliveryTask = (id) => {
    console.log(id);
    setDeliveryTask(deliveryTasks.filter(delivery => delivery.id !== id))
  }

  

  return (
    <div className="pickup-delivery-task">

      {pickupTasks.map(pickup => {
        // COLLAPSE HEADER FOR PICKUP
        const collapseHeaderPickup = (
          <div className="collapse-header">
            <span>Pickup</span>
            <span className="material-icons remove-task-icon" onClick={ ()=> removePickupTask(pickup.id)}>
              remove_circle_outline
            </span>
          </div>
        )
  
        return(
          <Collapse defaultActiveKey={['1']} key={pickup.id} >
            <Panel header={collapseHeaderPickup} key="1">
              <CreateTaskForm capacity={true} pickupBefore={true} addressPlaceholder="Pickup Address" />
            </Panel>
          </Collapse>
        )
      })}
      
      {deliveryTasks.map(delivery => {
        // COLLAPSE HEADER FOR DELIVERY
        const collapseHeaderDelivery = (
          <div className="collapse-header">
            <span>Delivery</span>
            <span className="material-icons remove-task-icon" onClick={()=> removeDeliveryTask(delivery.id)}>
              remove_circle_outline
            </span>
          </div>
        )

        return (
          <Collapse defaultActiveKey={['1']} key={delivery.id} >
            <Panel header={collapseHeaderDelivery} key="1">
              <CreateTaskForm deliveryBefore={true} addressPlaceholder="Delivery Address " />
            </Panel>
          </Collapse>
        )
      })}

      <AddTaskBtn taskType={`${pickupTasks.length >= 1 ? 'Add another pickup point' : 'Add a pickip point'}`} addTask={addPickupTask} />
      <AddTaskBtn taskType={`${deliveryTasks.length >= 1 ? 'Add another delivery point' : 'Add a delivery point'}`} addTask={addDliveryTask} />

    </div>
   );
}
 
export default PickupAndDelivery;