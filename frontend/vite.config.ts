import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {

//     /** If you set esmExternals to true, this plugins assumes that 
//       all external dependencies are ES modules */
 
//     commonjsOptions: {
//        esmExternals: true 
//     },
//  }
// })

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@chakra-ui/react', '@emotion/react', '@emotion/styled', 'framer-motion'],
  },
});