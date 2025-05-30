import {CircleX} from 'lucide-react'
import MainMenu from '../../components/MainMenu/MainMenu';
import { useDrawer } from '../../store/drawer';
export default function Drawer() {

  const {drawerOpen, changeDrawer} = useDrawer();
  
  return (
    <div className={`fixed w-2/3 h-[100dvh] z-50 bg-neutral-400 right-0 md:w-2xs ${drawerOpen ? 'visible' : 'invisible'}`}>
      <div className="flex items-center justify-between p-4">
        <h2 className='font-secundary'>MENU</h2>
        <button className="text-white cursor-pointer" onClick={changeDrawer}>
          <CircleX color='#22212C' />
        </button>
      </div>

      <div className="p-4">
        <MainMenu />
      </div>
    </div>
  );
}
