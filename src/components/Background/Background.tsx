'use client';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
function Background() {
  return (
    <>
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        <ShaderGradientCanvas
          style={{
            width: '100%',
            height: '100%',
          }}
          lazyLoad={undefined}
          fov={undefined}
          pixelDensity={1.5}
          pointerEvents='none'
        >
          <ShaderGradient
            animate='on'
            type='sphere'
            wireframe={false}
            shader='defaults'
            uTime={0}
            uSpeed={0.05}
            uStrength={0.3}
            uDensity={0.1}
            uFrequency={4}
            uAmplitude={3.8}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={100}
            color1='#375b5e'
            color2='#5c0297'
            color3='#8da0ce'
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType='env'
            brightness={0.2}
            envPreset='city'
            grain='on'
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=''
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>
    </>
  );
}
export default Background;