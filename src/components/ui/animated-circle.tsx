const AnimatedCircle = () => {
  return (
    <div className="fixed top-1/4 right-20 hidden lg:block">
      <div className="relative">
        {/* Main circle */}
        <div className="w-32 h-32 border-2 border-primary rounded-full flex items-center justify-center animate-spin">
          {/* Inner dot */}
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
        
        {/* Rotating text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-32 h-32 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '20s' }}>
            <defs>
              <path
                id="circle-path"
                d="M 64, 64 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
              />
            </defs>
            <text className="text-xs fill-foreground font-medium">
              <textPath href="#circle-path" startOffset="0%">
                . best . agency . best . agency
              </textPath>
            </text>
          </svg>
        </div>
        
        {/* Arrow */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircle;