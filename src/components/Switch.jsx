import classNames from 'classnames';
import React, { useState } from 'react'

function Switch() {
    const [isSelected, setIsSelected] = useState(true);
  return (
    <div
        onClick={() => setIsSelected(!isSelected)}
        className={classNames('flex w-[136px] h-[68px] py-1 px-1 bg-candy_apple_red rounded-full transition-all duration-500', {'bg-electric_green': isSelected,})}
    >
        <span className={classNames('w-[60px] h-[60px] bg-gray-300 rounded-full transition-all duration-500', {'ml-[68px]': isSelected,})}/>
    </div>
  )
}

export default Switch