import { useState } from 'react'

export const useStage = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('CRRU DEV')

  return (
    <div className='App'>
        <h1>Hello {name}</h1>
        <button type='button' onClick={() => setName('New Nattapon')}>Update Name</button>
        <div className='card'>
            <h2>{count}</h2>
            <button type='button' onClick={() => setCount(count - 1)}>
                Decrease
            </button>
            <button type='button' onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    </div>
  )
}

export default useStage