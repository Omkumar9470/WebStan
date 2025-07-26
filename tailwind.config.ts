import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                sans: ["'Saira'", 'sans-serif'],
                mono: ["'Intel One Mono'", 'monospace'],
                bitcount: ["'Bitcount Prop Single'", 'sans-serif'],
                winky: ["'Winky Rough'", 'sans-serif'],
                gothic: ["'Special Gothic Expanded One'", 'sans-serif'],
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                'hero-accent': 'hsl(var(--hero-accent))',
                'hero-text': 'hsl(var(--hero-text))',
                'stats-bg': 'hsl(var(--stats-bg))',
                'section-bg': 'hsl(var(--section-bg))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                // Manually adding back accordion animations
                'accordion-down': {
                    from: { height: "0" },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: "0" }
                },
                // Our hero animation
                'fadeInUp': {
                    '0%': { 
                        opacity: '0',
                        transform: 'translateY(10px)' 
                    },
                    '100%': { 
                        opacity: '1',
                        transform: 'translateY(0)' 
                    },
                },
                // The new pixelate animation
                pixelateIn: {
                  '0%': {
                    opacity: '0',
                    transform: 'scale(0.8)',
                    filter: 'blur(12px)',
                  },
                  '100%': {
                    opacity: '1',
                    transform: 'scale(1)',
                    filter: 'blur(0px)',
                  },
                },
            },
            animation: {
                // Manually adding back accordion animations
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                // Our hero animation
                'fadeInUp': 'fadeInUp 0.5s ease-out forwards',
                // The new pixelate animation utility
                pixelateIn: 'pixelateIn 0.8s ease-out forwards',
            }
        }
    },
    // REMOVED the plugin to prevent conflicts.
    plugins: [],
} satisfies Config;

export default config;
