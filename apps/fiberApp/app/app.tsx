import EsriMap from './components/EsriMap';
import { LayerManager } from '@fiber-x/shared';

export function App() {
  return (
    <div>
      <EsriMap />
      <LayerManager />
    </div>
  );
}

export default App;
