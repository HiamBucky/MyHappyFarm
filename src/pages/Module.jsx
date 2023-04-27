import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setModuleInfo } from '../features/moduleSlice';
function Module({ id, moduleName }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const setModule = () => {
    dispatch(
      setModuleInfo({
        moduleId: id,
        moduleName: moduleName,
      })
    );
    navigate(`/modules/${id}`);
  };

  return (
    <div className='flex flex-row items-center cursor-pointer hover:bg-dark_sea_green rounded-md active:bg-russian_green
     focus:bg-russian_green h-12 pr-2 pl-3 py-2 gap-4' onClick={setModule}>
      <div className='flex justify-start py-2'>
        <div className='font-inter lg:text-[14px] md:text-[10px] self-center'>
          {moduleName}
        </div>
      </div>
    </div>
  )
}

export default Module