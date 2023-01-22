import React from 'react'
import { useSelector} from 'react-redux'
function AdminDashboard() {
    const {name} = useSelector(state=>state.user)
  return (
    <div>
     
        Hi {name}  welcome to home tulkhatri01 admin
    </div>
  )
}

export default AdminDashboard
