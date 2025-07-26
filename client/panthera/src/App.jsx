import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MarketView from './pages/MarketView';
import AcquisitionView from './pages/AcquisitionView';
import URLsView from './pages/URLView';

// export default function App() {
//   // console.log("App is rendering");

//   return (
//     <div className="flex h-screen bg-[#f7f9fc]">
//       <Sidebar />
//       <div className="flex flex-col w-[80%]">
//         <Navbar />
//         <div className="flex-1 overflow-y-auto p-4">
//           <Routes>
//             <Route path="/" element={<Navigate to="/market" />} />
//             <Route path="/market" element={<MarketView />} />
//             <Route path="/acquisition" element={<AcquisitionView />} />
//             <Route path="/urls" element={<URLsView />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }


export default function App() {
  return (
    <div className="flex bg-[#f7f9fc]">
      <Sidebar />
      <div className="ml-[20%] w-[80%] min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/market" />} />
            <Route path="/market" element={<MarketView />} />
            <Route path="/acquisition" element={<AcquisitionView />} />
            <Route path="/urls" element={<URLsView />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}