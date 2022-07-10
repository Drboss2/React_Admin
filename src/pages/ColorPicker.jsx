import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'


const change = (ags)=>{
  document.getElementById('preview').style.backgroundColor=ags.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3x'>
    <Header category="App" title="Editor"/>
      <div className='text-center'>
        <div id="preview"/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl front-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl front-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id="inline-Picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker