---
name: gladia-brand
description: "Design system tokens, component styles, and design principles for Gladia. Use when generating any UI code to ensure brand compliance and high-quality design."
---

# Gladia — Design System

385 tokens · 3 tiers (primitive → semantic → component)

## CSS Custom Properties

```css
:root {
  /* ─── Primitives ─── */
  --primitives-font-size-10: 10px;
  --primitives-font-size-12: 12px;
  --primitives-font-size-14: 14px;
  --primitives-font-size-16: 16px;
  --primitives-font-size-18: 18px;
  --primitives-font-size-20: 20px;
  --primitives-font-size-24: 24px;
  --primitives-font-size-32: 32px;
  --primitives-font-size-40: 40px;
  --primitives-font-size-48: 48px;
  --primitives-font-size-56: 56px;
  --primitives-font-size-60: 60px;
  --primitives-font-size-64: 64px;
  --primitives-font-size-80: 80px;
  --primitives-font-weight-bold: 700;
  --primitives-font-weight-book: 450;
  --primitives-font-weight-medium: 500;
  --primitives-font-weight-regular: 400;
  --primitives-font-weight-semibold: 600;
  --primitives-font-lineHeight-none: 1;
  --primitives-font-lineHeight-snug: 1.3;
  --primitives-font-lineHeight-loose: 1.6;
  --primitives-font-lineHeight-tight: 1.2;
  --primitives-font-lineHeight-normal: 1.4;
  --primitives-font-lineHeight-relaxed: 1.5;
  --primitives-font-letterSpacing-wide: 0.02em;
  --primitives-font-letterSpacing-tight: -0.02em;
  --primitives-font-letterSpacing-wider: 0.08em;
  --primitives-font-letterSpacing-normal: 0;
  --primitives-font-letterSpacing-widest: 0.16em;
  --primitives-font-letterSpacing-tighter: -0.04em;
  --primitives-color-red-100: #FEE2E2;
  --primitives-color-red-500: #EF4444;
  --primitives-color-red-600: #DC2626;
  --primitives-color-blue-100: #BAE0FF;
  --primitives-color-blue-200: #7EC8FF;
  --primitives-color-blue-300: #45B0FF;
  --primitives-color-blue-400: #1A9EFF;
  --primitives-color-blue-500: #008CFF;
  --primitives-color-blue-600: #0070CC;
  --primitives-color-blue-700: #005499;
  --primitives-color-pink-400: #FF5FB0;
  --primitives-color-green-100: #DCFCE7;
  --primitives-color-green-400: #4ADE80;
  --primitives-color-green-500: #22C55E;
  --primitives-color-green-600: #16A34A;
  --primitives-color-orange-500: #FF630F;
  --primitives-color-purple-100: #EDE9FE;
  --primitives-color-purple-200: #BEB4FF;
  --primitives-color-purple-300: #A87CFF;
  --primitives-color-purple-400: #947AFC;
  --primitives-color-purple-500: #925BFF;
  --primitives-color-purple-600: #7C3AED;
  --primitives-color-purple-700: #6D28D9;
  --primitives-color-yellow-100: #FEF9C3;
  --primitives-color-yellow-400: #F2CB45;
  --primitives-color-yellow-500: #EAB308;
  --primitives-color-neutral-0: #FFFFFF;
  --primitives-color-neutral-50: #FAFAFA;
  --primitives-color-neutral-100: #F5F5F5;
  --primitives-color-neutral-200: #E5E5E5;
  --primitives-color-neutral-300: #D4D4D4;
  --primitives-color-neutral-400: #A3A3A3;
  --primitives-color-neutral-500: #727272;
  --primitives-color-neutral-600: #515151;
  --primitives-color-neutral-700: #252525;
  --primitives-color-neutral-800: #1C1C1E;
  --primitives-color-neutral-900: #0C0C0C;
  --primitives-color-neutral-1000: #000000;
  --primitives-space-0: 0px;
  --primitives-space-1: 8px;
  --primitives-space-2: 16px;
  --primitives-space-3: 24px;
  --primitives-space-4: 32px;
  --primitives-space-5: 40px;
  --primitives-space-6: 48px;
  --primitives-space-7: 56px;
  --primitives-space-8: 64px;
  --primitives-space-9: 72px;
  --primitives-space-10: 80px;
  --primitives-space-12: 96px;
  --primitives-space-14: 112px;
  --primitives-space-15: 120px;
  --primitives-space-16: 128px;
  --primitives-space-20: 160px;
  --primitives-space-24: 192px;
  --primitives-radius-0: 0px;
  --primitives-radius-1: 8px;
  --primitives-radius-2: 16px;
  --primitives-radius-3: 24px;
  --primitives-radius-4: 32px;
  --primitives-radius-5: 40px;
  --primitives-radius-6: 48px;
  --primitives-radius-full: 9999px;
  --primitives-zIndex-base: 0;
  --primitives-zIndex-fixed: 30;
  --primitives-zIndex-modal: 50;
  --primitives-zIndex-sticky: 20;
  --primitives-zIndex-overlay: 40;
  --primitives-zIndex-tooltip: 60;
  --primitives-zIndex-dropdown: 10;
  --primitives-opacity-0: 0;
  --primitives-opacity-5: 0.05;
  --primitives-opacity-10: 0.1;
  --primitives-opacity-20: 0.2;
  --primitives-opacity-40: 0.4;
  --primitives-opacity-60: 0.6;
  --primitives-opacity-80: 0.8;
  --primitives-opacity-100: 1;
  --primitives-duration-0: 0ms;
  --primitives-duration-1: 80ms;
  --primitives-duration-2: 160ms;
  --primitives-duration-3: 240ms;
  --primitives-duration-4: 320ms;
  --primitives-duration-5: 480ms;
  --primitives-breakpoint-lg: 1024px;
  --primitives-breakpoint-md: 768px;
  --primitives-breakpoint-sm: 640px;
  --primitives-breakpoint-xl: 1280px;
  --primitives-breakpoint-2xl: 1440px;
  --primitives-font-family-mono-0: Geist Mono;
  --primitives-font-family-mono-1: JetBrains Mono;
  --primitives-font-family-mono-2: monospace;
  --primitives-font-family-sans-0: Suisse Intl;
  --primitives-font-family-sans-1: -apple-system;
  --primitives-font-family-sans-2: BlinkMacSystemFont;
  --primitives-font-family-sans-3: sans-serif;
  --primitives-shadow-lg-blur: 16px;
  --primitives-shadow-lg-color: rgba(0, 0, 0, 0.1);
  --primitives-shadow-lg-spread: -4px;
  --primitives-shadow-lg-offsetX: 0px;
  --primitives-shadow-lg-offsetY: 8px;
  --primitives-shadow-md-blur: 8px;
  --primitives-shadow-md-color: rgba(0, 0, 0, 0.1);
  --primitives-shadow-md-spread: -2px;
  --primitives-shadow-md-offsetX: 0px;
  --primitives-shadow-md-offsetY: 4px;
  --primitives-shadow-sm-blur: 2px;
  --primitives-shadow-sm-color: rgba(0, 0, 0, 0.05);
  --primitives-shadow-sm-spread: 0px;
  --primitives-shadow-sm-offsetX: 0px;
  --primitives-shadow-sm-offsetY: 1px;
  --primitives-shadow-xl-blur: 32px;
  --primitives-shadow-xl-color: rgba(0, 0, 0, 0.15);
  --primitives-shadow-xl-spread: -8px;
  --primitives-shadow-xl-offsetX: 0px;
  --primitives-shadow-xl-offsetY: 16px;
  --primitives-shadow-none-blur: 0px;
  --primitives-shadow-none-color: transparent;
  --primitives-shadow-none-spread: 0px;
  --primitives-shadow-none-offsetX: 0px;
  --primitives-shadow-none-offsetY: 0px;

  /* ─── Semantic ─── */
  --semantic-color-text-link: #D4D4D4;
  --semantic-color-text-brand: #947AFC;
  --semantic-color-text-error: #DC2626;
  --semantic-color-text-inverse: #000000;
  --semantic-color-text-primary: #FFFFFF;
  --semantic-color-text-success: #16A34A;
  --semantic-color-text-warning: #EAB308;
  --semantic-color-text-disabled: #A3A3A3;
  --semantic-color-text-tertiary: #727272;
  --semantic-color-text-secondary: #A3A3A3;
  --semantic-color-accent-blue: #008CFF;
  --semantic-color-accent-pink: #FF5FB0;
  --semantic-color-accent-green: #4ADE80;
  --semantic-color-accent-orange: #FF630F;
  --semantic-color-accent-purple: #947AFC;
  --semantic-color-accent-yellow: #F2CB45;
  --semantic-color-accent-purpleSubtle: #BEB4FF;
  --semantic-color-border-brand: #947AFC;
  --semantic-color-border-error: #EF4444;
  --semantic-color-border-focus: #1A9EFF;
  --semantic-color-border-inverse: #E5E5E5;
  --semantic-color-border-primary: #252525;
  --semantic-color-border-success: #22C55E;
  --semantic-color-border-warning: #EAB308;
  --semantic-color-border-tertiary: #1C1C1E;
  --semantic-color-border-secondary: #515151;
  --semantic-color-border-transparent: rgba(255, 255, 255, 0.12);
  --semantic-color-border-transparentSubtle: rgba(255, 255, 255, 0.08);
  --semantic-color-background-brand: #947AFC;
  --semantic-color-background-error: #FEE2E2;
  --semantic-color-background-glass: rgba(12, 12, 12, 0.55);
  --semantic-color-background-sunken: #0C0C0C;
  --semantic-color-background-inverse: #FFFFFF;
  --semantic-color-background-primary: #000000;
  --semantic-color-background-success: #DCFCE7;
  --semantic-color-background-warning: #FEF9C3;
  --semantic-color-background-elevated: #252525;
  --semantic-color-background-tertiary: #1C1C1E;
  --semantic-color-background-secondary: #0C0C0C;
  --semantic-color-background-glassLight: rgba(255, 255, 255, 0.08);
  --semantic-color-background-brandSubtle: #EDE9FE;
  --semantic-space-lg: 32px;
  --semantic-space-md: 24px;
  --semantic-space-sm: 16px;
  --semantic-space-xl: 48px;
  --semantic-space-xs: 8px;
  --semantic-space-2xl: 64px;
  --semantic-space-3xl: 96px;
  --semantic-space-4xl: 120px;
  --semantic-space-5xl: 160px;
  --semantic-space-none: 0px;
  --semantic-radius-lg: 24px;
  --semantic-radius-md: 16px;
  --semantic-radius-sm: 8px;
  --semantic-radius-xl: 32px;
  --semantic-radius-2xl: 40px;
  --semantic-radius-full: 9999px;
  --semantic-radius-none: 0px;
  --semantic-typography-body-lg-fontSize: 20px;
  --semantic-typography-body-lg-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-body-lg-fontWeight: 400;
  --semantic-typography-body-lg-lineHeight: 1.5;
  --semantic-typography-body-md-fontSize: 16px;
  --semantic-typography-body-md-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-body-md-fontWeight: 400;
  --semantic-typography-body-md-lineHeight: 1.4;
  --semantic-typography-body-sm-fontSize: 14px;
  --semantic-typography-body-sm-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-body-sm-fontWeight: 400;
  --semantic-typography-body-sm-lineHeight: 1.4;
  --semantic-typography-body-xs-fontSize: 12px;
  --semantic-typography-body-xs-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-body-xs-fontWeight: 400;
  --semantic-typography-body-xs-lineHeight: 1.4;
  --semantic-typography-display-lg-fontSize: 80px;
  --semantic-typography-display-lg-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-display-lg-fontWeight: 400;
  --semantic-typography-display-lg-lineHeight: 1.2;
  --semantic-typography-display-lg-letterSpacing: -0.04em;
  --semantic-typography-display-md-fontSize: 64px;
  --semantic-typography-display-md-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-display-md-fontWeight: 400;
  --semantic-typography-display-md-lineHeight: 1.2;
  --semantic-typography-display-md-letterSpacing: -0.04em;
  --semantic-typography-display-sm-fontSize: 48px;
  --semantic-typography-display-sm-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-display-sm-fontWeight: 400;
  --semantic-typography-display-sm-lineHeight: 1.2;
  --semantic-typography-display-sm-letterSpacing: -0.02em;
  --semantic-typography-heading-lg-fontSize: 40px;
  --semantic-typography-heading-lg-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-heading-lg-fontWeight: 400;
  --semantic-typography-heading-lg-lineHeight: 1.3;
  --semantic-typography-heading-lg-letterSpacing: -0.02em;
  --semantic-typography-heading-md-fontSize: 32px;
  --semantic-typography-heading-md-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-heading-md-fontWeight: 400;
  --semantic-typography-heading-md-lineHeight: 1.3;
  --semantic-typography-heading-sm-fontSize: 24px;
  --semantic-typography-heading-sm-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-heading-sm-fontWeight: 400;
  --semantic-typography-heading-sm-lineHeight: 1.3;
  --semantic-typography-heading-xs-fontSize: 20px;
  --semantic-typography-heading-xs-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --semantic-typography-heading-xs-fontWeight: 400;
  --semantic-typography-heading-xs-lineHeight: 1.4;
  --semantic-typography-overline-fontSize: 12px;
  --semantic-typography-overline-fontFamily: Geist Mono,JetBrains Mono,monospace;
  --semantic-typography-overline-fontWeight: 400;
  --semantic-typography-overline-lineHeight: 1.2;
  --semantic-typography-overline-letterSpacing: 0.16em;
  --semantic-typography-overline-textTransform: uppercase;

  /* ─── Components ─── */
  --components-card-padding-lg: 32px;
  --components-card-padding-md: 24px;
  --components-card-padding-sm: 16px;
  --components-card-variant-dark-border: #1C1C1E;
  --components-card-variant-dark-background: #000000;
  --components-card-variant-default-border: #252525;
  --components-card-variant-default-shadow: [object Object];
  --components-card-variant-default-background: #1C1C1E;
  --components-card-variant-elevated-border: transparent;
  --components-card-variant-elevated-shadow: [object Object];
  --components-card-variant-elevated-background: #1C1C1E;
  --components-card-borderWidth: 1px;
  --components-card-borderRadius: 32px;
  --components-badge-dot-size: 6px;
  --components-badge-dot-background: #947AFC;
  --components-badge-size-md-fontSize: 14px;
  --components-badge-size-md-paddingX: 16px;
  --components-badge-size-md-paddingY: 8px;
  --components-badge-size-sm-fontSize: 12px;
  --components-badge-size-sm-paddingX: 8px;
  --components-badge-size-sm-paddingY: 4px;
  --components-badge-variant-brand-text: #6D28D9;
  --components-badge-variant-brand-background: #EDE9FE;
  --components-badge-variant-error-text: #DC2626;
  --components-badge-variant-error-background: #FEE2E2;
  --components-badge-variant-default-text: #A3A3A3;
  --components-badge-variant-default-background: #1C1C1E;
  --components-badge-variant-success-text: #16A34A;
  --components-badge-variant-success-background: #DCFCE7;
  --components-badge-variant-warning-text: #EAB308;
  --components-badge-variant-warning-background: #FEF9C3;
  --components-badge-fontWeight: 400;
  --components-badge-borderColor: #252525;
  --components-badge-borderRadius: 9999px;
  --components-input-size-lg-height: 56px;
  --components-input-size-lg-fontSize: 16px;
  --components-input-size-lg-paddingX: 24px;
  --components-input-size-md-height: 48px;
  --components-input-size-md-fontSize: 16px;
  --components-input-size-md-paddingX: 16px;
  --components-input-size-sm-height: 40px;
  --components-input-size-sm-fontSize: 14px;
  --components-input-size-sm-paddingX: 16px;
  --components-input-state-error-border: #EF4444;
  --components-input-state-focus-border: #947AFC;
  --components-input-state-default-text: #FFFFFF;
  --components-input-state-default-border: #252525;
  --components-input-state-default-background: #0C0C0C;
  --components-input-state-default-placeholder: #727272;
  --components-input-state-disabled-opacity: 0.6;
  --components-input-state-disabled-background: #1C1C1E;
  --components-input-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --components-input-borderWidth: 1px;
  --components-input-borderRadius: 16px;
  --components-avatar-size-lg: 64px;
  --components-avatar-size-md: 40px;
  --components-avatar-size-sm: 32px;
  --components-avatar-size-xl: 80px;
  --components-avatar-size-xs: 24px;
  --components-avatar-text: #A3A3A3;
  --components-avatar-background: #1C1C1E;
  --components-avatar-fontWeight: 400;
  --components-avatar-borderRadius: 9999px;
  --components-button-size-lg-gap: 16px;
  --components-button-size-lg-height: 56px;
  --components-button-size-lg-fontSize: 16px;
  --components-button-size-lg-paddingX: 32px;
  --components-button-size-md-gap: 8px;
  --components-button-size-md-height: 40px;
  --components-button-size-md-fontSize: 16px;
  --components-button-size-md-paddingX: 24px;
  --components-button-size-sm-gap: 8px;
  --components-button-size-sm-height: 32px;
  --components-button-size-sm-fontSize: 14px;
  --components-button-size-sm-paddingX: 16px;
  --components-button-variant-ghost-text: #FFFFFF;
  --components-button-variant-ghost-border: transparent;
  --components-button-variant-ghost-background: transparent;
  --components-button-variant-ghost-backgroundHover: rgba(255, 255, 255, 0.08);
  --components-button-variant-primary-text: #000000;
  --components-button-variant-primary-border: transparent;
  --components-button-variant-primary-background: #FFFFFF;
  --components-button-variant-primary-backgroundHover: #E5E5E5;
  --components-button-variant-secondary-text: #FFFFFF;
  --components-button-variant-secondary-border: rgba(255, 255, 255, 0.08);
  --components-button-variant-secondary-background: #1C1C1E;
  --components-button-variant-secondary-backgroundHover: #515151;
  --components-button-fontFamily: Suisse Intl,-apple-system,BlinkMacSystemFont,sans-serif;
  --components-button-fontWeight: 400;
  --components-button-borderRadius: 9999px;
  --components-footer-link-color: #727272;
  --components-footer-link-fontSize: 16px;
  --components-footer-column-gap: 16px;
  --components-footer-heading-color: #FFFFFF;
  --components-footer-heading-fontSize: 16px;
  --components-footer-paddingX: 8px;
  --components-footer-borderTop: #252525;
  --components-footer-background: #000000;
  --components-footer-paddingTop: 72px;
  --components-menuBar-border: rgba(255, 255, 255, 0.12);
  --components-menuBar-height: 72px;
  --components-menuBar-navItem-gap: 16px;
  --components-menuBar-navItem-color: #D4D4D4;
  --components-menuBar-navItem-fontSize: 16px;
  --components-menuBar-paddingX: 24px;
  --components-menuBar-background: rgba(12, 12, 12, 0.55);
  --components-menuBar-borderRadius: 24px;
  --components-tagLabel-gap: 16px;
  --components-tagLabel-text-color: #947AFC;
  --components-tagLabel-text-fontSize: 12px;
  --components-tagLabel-text-fontFamily: Geist Mono,JetBrains Mono,monospace;
  --components-tagLabel-text-fontWeight: 500;
  --components-tagLabel-text-letterSpacing: 0.16em;
  --components-tagLabel-text-textTransform: uppercase;
  --components-tagLabel-indicator-width: 16px;
  --components-tagLabel-indicator-height: 8px;
  --components-tagLabel-indicator-background: #947AFC;
  --components-tagLabel-indicator-borderRadius: 9999px;
  --components-accordion-icon-size: 32px;
  --components-accordion-title-color: #FFFFFF;
  --components-accordion-title-fontSize: 20px;
  --components-accordion-title-fontWeight: 400;
  --components-accordion-paddingY: 32px;
  --components-accordion-borderColor: #1C1C1E;
  --components-featureCard-size-lg: 576px;
  --components-featureCard-size-md: 448px;
  --components-featureCard-border: #1C1C1E;
  --components-featureCard-background: #000000;
  --components-featureCard-borderWidth: 1px;
  --components-featureCard-borderRadius: 40px;
  --components-card-variant-dark-shadow-blur: 0px;
  --components-card-variant-dark-shadow-color: transparent;
  --components-card-variant-dark-shadow-spread: 0px;
  --components-card-variant-dark-shadow-offsetX: 0px;
  --components-card-variant-dark-shadow-offsetY: 0px;
  --components-input-state-error-shadow-blur: 0px;
  --components-input-state-error-shadow-color: #FEE2E2;
  --components-input-state-error-shadow-spread: 3px;
  --components-input-state-error-shadow-offsetX: 0px;
  --components-input-state-error-shadow-offsetY: 0px;
  --components-input-state-focus-shadow-blur: 0px;
  --components-input-state-focus-shadow-color: #EDE9FE;
  --components-input-state-focus-shadow-spread: 3px;
  --components-input-state-focus-shadow-offsetX: 0px;
  --components-input-state-focus-shadow-offsetY: 0px;
  --components-input-transition-delay: 0ms;
  --components-input-transition-duration: 80ms;
  --components-button-transition-delay: 0ms;
  --components-button-transition-duration: 80ms;

  /* ─── Layout ─── */
  --layout-grid-gap: 24px;
  --layout-grid-columns: 12px;
  --layout-content-gap: 48px;
  --layout-section-gap: 120px;
  --layout-container-maxWidth: 1200px;
  --layout-container-paddingX: 24px;
}
```

## Components

### Card
```css
.card {
  border-color: var(--card-variant-elevated-border);
  box-shadow: var(--card-variant-elevated-shadow);
  background: var(--card-variant-elevated-background);
  border-radius: var(--card-borderradius);
  transition: all 160ms ease-out;
}
```

### Badge
```css
.badge {
  background: var(--badge-variant-warning-background);
  padding-inline: var(--badge-size-sm-paddingx);
  padding-block: var(--badge-size-sm-paddingy);
  color: var(--badge-variant-warning-text);
  border-radius: var(--badge-borderradius);
  transition: all 160ms ease-out;
}
```

### Input
```css
.input {
  padding-inline: var(--input-size-sm-paddingx);
  border-color: var(--input-state-default-border);
  box-shadow: var(--input-state-focus-shadow);
  color: var(--input-state-default-text);
  background: var(--input-state-disabled-background);
  font-family: var(--input-fontfamily);
  border-radius: var(--input-borderradius);
  transition: all 160ms ease-out;
}
```

### Avatar
```css
.avatar {
  color: var(--avatar-text);
  background: var(--avatar-background);
  border-radius: var(--avatar-borderradius);
  transition: all 160ms ease-out;
}
```

### Button
```css
.button {
  gap: var(--button-size-sm-gap);
  padding-inline: var(--button-size-sm-paddingx);
  color: var(--button-variant-secondary-text);
  border-color: var(--button-variant-secondary-border);
  background: var(--button-variant-secondary-background);
  font-family: var(--button-fontfamily);
  border-radius: var(--button-borderradius);
  transition: all 160ms ease-out;
}
```

### Footer
```css
.footer {
  gap: var(--footer-column-gap);
  padding-inline: var(--footer-paddingx);
  background: var(--footer-background);
  transition: all 160ms ease-out;
}
```

### MenuBar
```css
.menu-bar {
  border-color: var(--menubar-border);
  gap: var(--menubar-navitem-gap);
  padding-inline: var(--menubar-paddingx);
  background: var(--menubar-background);
  border-radius: var(--menubar-borderradius);
  transition: all 160ms ease-out;
}
```

### TagLabel
```css
.tag-label {
  gap: var(--taglabel-gap);
  font-family: var(--taglabel-text-fontfamily);
  background: var(--taglabel-indicator-background);
  border-radius: var(--taglabel-indicator-borderradius);
  transition: all 160ms ease-out;
}
```

### Accordion
```css
.accordion {
  padding-block: var(--accordion-paddingy);
  transition: all 160ms ease-out;
}
```

### FeatureCard
```css
.feature-card {
  border-color: var(--featurecard-border);
  background: var(--featurecard-background);
  border-radius: var(--featurecard-borderradius);
  transition: all 160ms ease-out;
}
```

---

## Design Intelligence

These are universal design principles. Apply them to every output. They are not optional — they are what separates "technically correct" from "looks like a human designed it."

### Operating Modes

This agent works in two modes depending on how you prompt it:

**Mode 1 — Freeform generation**
Trigger: Any normal request ("Build me a hero section", "Create a pricing page")
Behavior: Generate from scratch using the brand tokens + the design principles below. You decide the layout, structure, and composition.

**Mode 2 — Figma override**
Trigger: A Figma link is provided (e.g., "on this https://figma.com/design/...")
Behavior: Use the Figma MCP to pull the component's design context. Then:

1. **KEEP from Figma**: Layout structure, element hierarchy, grid, flex direction, order of elements, responsive breakpoints, component composition (what's inside what), auto-layout logic, spacing ratios between elements (proportional relationships, not exact values).
2. **STRIP from Figma**: All hardcoded colors, font families, font sizes, border-radius values, shadows, border colors, background colors, opacity values, specific spacing pixel values.
3. **REPLACE with brand tokens**: Map every stripped visual property to the closest brand token:
   - Any background color → appropriate `--color-surface-*` or `--color-action-*` token
   - Any text color → appropriate `--color-text-*` token
   - Any border color → appropriate `--color-border-*` token
   - Any font family → `--font-family-primary` or `--font-family-secondary`
   - Any border-radius → closest `--radius-*` token
   - Any spacing → closest brand spacing token (snap to the spacing scale)
   - Any shadow → brand elevation tokens if available, or design-appropriate shadow using brand neutrals
4. **PRESERVE interaction intent**: If the Figma component shows hover states, focus states, or variants, map those to the brand's state tokens (e.g., `--button-color-bg-hover`, `--color-action-hover`).
5. **ADD what Figma can't show**: Transitions (`transition: all 160ms ease-out`), focus-visible rings, reduced-motion media queries, cursor states. Figma is static — the code shouldn't be.

**Figma override decision matrix:**

| Figma says... | Do this |
|---|---|
| Flex column, gap 24px | Keep flex column, replace gap with nearest spacing token |
| Background #1E1E1E | Replace with `var(--color-surface-default)` or `var(--color-surface-raised)` based on context |
| Font: Helvetica 16px/24px bold | Replace with `var(--font-family-primary)`, keep size relationship, use brand weight token |
| Border-radius: 12px | Replace with nearest `var(--radius-*)` token |
| 3-column grid with 32px gap | Keep 3-column grid, replace gap with spacing token |
| Button with #6366F1 background | Replace with `var(--button-color-bg-default)` |
| Element order: icon → title → description → CTA | Keep this exact order — it's structure, not style |
| Width: 384px | Keep as max-width or use relative sizing — this is layout intent |

The principle: **Figma owns the skeleton. Brand tokens own the skin.**

### Visual Hierarchy

Every screen has exactly ONE primary focal point. Build a clear reading order:

1. **Size contrast** — The most important element should be 2-3× larger than surrounding content. A hero headline at 48-64px next to 16px body text creates instant hierarchy.
2. **Weight contrast** — Pair bold (600-700) headings with regular (400) body. Never use medium (500) for everything — it flattens the page.
3. **Color contrast** — Use the brand action color sparingly. If everything is purple, nothing is purple. The CTA button should be the only element using `--color-action-default` in its section.
4. **Spatial isolation** — Important elements need breathing room. A CTA with 64px of whitespace above it outperforms one crammed between paragraphs.

**Test**: Squint at the layout. If you can't immediately tell what's most important, the hierarchy is broken.

### Spacing & Rhythm

Spacing is the single biggest differentiator between amateur and professional UI.

- **Section spacing**: 80-120px between major sections. This feels generous on desktop and compresses naturally on mobile.
- **Content groups**: 32-48px between related groups within a section.
- **Element spacing**: 16-24px between items within a group (paragraphs, cards, list items).
- **Tight coupling**: 4-8px between a label and its field, a heading and its subtext, an icon and its text.

**The rule**: Related things are close. Unrelated things are far apart. The distance between elements communicates their relationship. This is the Gestalt proximity principle — use it aggressively.

**Consistency**: Pick a spacing scale and stick to it. Don't mix 12px, 15px, 18px, 20px — use 8px, 16px, 24px, 32px, 48px, 64px (base-8) or the brand's spacing tokens.

### Layout Patterns

**Hero sections**:
- Centered single-column for maximum impact (SaaS landing pages, product launches)
- Two-column (text left, visual right) for products that need to show the interface
- Never center-align body text longer than 2 lines — left-align paragraphs, center-align only headings and CTAs
- Max-width for readable text: 680px (approximately 65-75 characters per line)

**Card grids**:
- 3-column for features/pricing (the standard)
- 2-column for detailed cards with descriptions
- 4-column only for small, icon-driven items
- Cards in a row must be equal height — use CSS Grid with `grid-template-rows: subgrid` or flexbox with `align-items: stretch`
- Gap between cards: 24-32px

**Forms**:
- Single column. Always. Multi-column forms have worse completion rates.
- Label above input (not beside, not floating inside)
- Group related fields with a visible section header or extra spacing
- Primary action button full-width on mobile, right-aligned on desktop

**Content sections**:
- Alternate visual patterns (text-left/image-right, then flip) to create rhythm
- Use a subtle background color change every other section to create visual separation without borders
- Anchor sections with an overline/eyebrow → heading → subtext stack

### Typography Composition

- **Hero headline**: 48-80px, bold/semibold, tight letter-spacing (-0.02em to -0.04em), tight line-height (1.1-1.2)
- **Section heading**: 32-40px, semibold, normal letter-spacing, line-height 1.2-1.3
- **Subheading**: 20-24px, medium weight
- **Body text**: 16-18px, regular weight, relaxed line-height (1.5-1.6), max-width ~680px
- **Caption / helper text**: 12-14px, muted color (`--color-text-muted`)
- **Overline / eyebrow**: 12px, uppercase, wide letter-spacing (0.08-0.16em), monospace or regular, muted or brand color. Use above section headings to provide context.

**Pairing rule**: Use the brand's primary font for headings, secondary (or same) for body. Never use more than 2 font families on one page. If the brand has a mono font, reserve it for overlines, code, and data.

### Color Application

- **60-30-10 rule**: 60% neutral (backgrounds, body text), 30% supporting (cards, sections, borders), 10% accent (CTAs, active states, highlights)
- **Backgrounds**: Alternate between `--color-surface-default` and `--color-surface-raised` (or a slightly different neutral) for section separation. Avoid hard borders between sections — color shifts are more elegant.
- **Text on colored backgrounds**: Always verify contrast. `--color-text-default` on `--color-surface-default` must meet WCAG AA (4.5:1 for body text, 3:1 for large text).
- **Hover states**: Darken by one step in the primitive scale (500→600). Don't change the hue. Don't add opacity. Don't change the border.
- **Focus states**: Use a 2-3px ring in the brand color or blue with an offset. `outline: 2px solid var(--color-action-default); outline-offset: 2px;`
- **Disabled states**: 40-50% opacity on the entire element. Don't change colors — just reduce opacity.

### Component Behavior

**Buttons**:
- Primary: Filled background, high contrast. Use for THE action on the page (1 per section max).
- Secondary: Outlined or muted background. Use for supporting actions.
- Ghost/text: No background or border. Use for tertiary actions (cancel, dismiss, learn more).
- Minimum touch target: 44×44px. Padding creates the target, not the text size.
- Include `transition: all 160ms ease-out` for state changes.

**Inputs**:
- Resting state: subtle border (neutral-200/300).
- Focus: Brand-colored border + subtle ring/shadow (`box-shadow: 0 0 0 3px rgba(brand, 0.15)`).
- Error: Red border + error message below (never just color — always add text).
- Disabled: Reduced opacity + `cursor: not-allowed`.
- Placeholder text: Muted color, should describe format not label ("john@example.com" not "Email").

**Cards**:
- Interactive cards (clickable): Add subtle hover lift (`transform: translateY(-2px)` + shadow increase) and `cursor: pointer`.
- Static cards: No hover effect.
- Card content order: Image/visual → overline → title → description → metadata/CTA (top-to-bottom).
- Internal padding: 24-32px. Consistent across all cards in a grid.

**Modals / Dialogs**:
- Overlay: Semi-transparent dark (`rgba(0,0,0,0.5)` or `rgba(0,0,0,0.7)`).
- Max-width: 480px for confirmations, 640px for forms, 800px for complex content.
- Always include a close method (X button, click outside, Escape key).
- Title + body + actions pattern. Actions right-aligned: secondary left, primary right.

### Empty States, Loading, & Errors

Never ship a component without these three states. This is what separates prototypes from products.

**Empty states**:
- Illustration or icon (subtle, not overwhelming)
- Headline explaining what will go here
- Subtext explaining how to add content
- Single CTA to take action
- Example: "No projects yet" → "Create your first project to get started" → [Create Project] button

**Loading states**:
- Skeleton screens (gray pulsing blocks matching the content shape) > spinners
- Never block the entire page for partial data — show what you have, skeleton the rest
- Pulse animation: `background: linear-gradient(90deg, neutral-100 25%, neutral-200 50%, neutral-100 75%); background-size: 200% 100%; animation: pulse 1.5s ease-in-out infinite;`
- For actions: disable the button + show a small spinner inside it, keep the label visible

**Error states**:
- Inline errors next to the failed element (not toasts for form validation)
- Red border + red text below the field, 4-8px gap
- Error messages should say what went wrong AND how to fix it: "Email is required" not "Error"
- Global errors (network, server): Banner at top of page or toast, with a retry action
- Never use only color to communicate errors — always add an icon or text

### Responsive Design

- **Mobile-first CSS**: Write base styles for 320px, then add `@media (min-width: 768px)` and `@media (min-width: 1024px)`.
- **Breakpoints**: 768px (tablet), 1024px (desktop), 1280px (wide). Don't invent custom breakpoints.
- **Fluid typography**: Use `clamp()` for hero text — e.g., `font-size: clamp(32px, 5vw, 64px)`.
- **Grid collapse**: 3-col → 2-col at tablet → 1-col at mobile. Cards stack vertically.
- **Touch targets**: 44px minimum on mobile. Add padding, not just relying on text size.
- **Mobile navigation**: Hamburger menu → slide-out or full-screen overlay. Don't try to fit desktop nav on mobile.
- **Container padding**: 16px on mobile, 24px on tablet, 32px on desktop (or use brand spacing tokens).
- **Images**: Always set `max-width: 100%; height: auto;`. Use `aspect-ratio` to prevent layout shift.

### Accessibility Baseline

- **Contrast**: 4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+).
- **Focus indicators**: Every interactive element must have a visible focus ring. Use `:focus-visible` to show only on keyboard navigation.
- **Semantic HTML**: `<button>` for actions, `<a>` for navigation, `<input>` for data entry. Never `<div onclick>`.
- **Alt text**: Every `<img>` needs `alt`. Decorative images get `alt=""`. Meaningful images describe the content.
- **ARIA only when needed**: Semantic HTML first. Use `aria-label` for icon-only buttons, `aria-live` for dynamic content, `role` only when no semantic equivalent exists.
- **Skip link**: Add `<a href="#main" class="skip-link">Skip to content</a>` as first element in body, visually hidden until focused.
- **Reduced motion**: Wrap animations in `@media (prefers-reduced-motion: no-preference) { ... }`.

### Micro-interactions & Polish

These small details signal "a designer built this":

- **Button press**: `transform: scale(0.98)` on `:active` — makes buttons feel physically pressable.
- **Smooth scrolling**: `html { scroll-behavior: smooth; }` for anchor links.
- **Staggered reveals**: When multiple cards/items appear, stagger by 50-80ms: `animation-delay: calc(var(--index) * 60ms)`.
- **Hover underlines for links**: `text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px;` — cleaner than default underline.
- **Transitions on everything interactive**: `transition: all 160ms ease-out;` on buttons, links, inputs, cards. Never let a state change be instant.
- **Border-radius consistency**: Don't mix sharp and rounded on the same page. If buttons are pill-shaped, badges should be too. If cards are 16px radius, nested elements should be 12px (slightly less).
- **Nested radius formula**: Inner radius = outer radius - padding between elements. A card with `border-radius: 16px` and `padding: 8px` should have inner elements at `border-radius: 8px`.

### What NOT to do

- ❌ Center-align paragraphs of text (center only headings and short labels)
- ❌ Use more than 3 font sizes on a single screen
- ❌ Put two primary (filled) buttons next to each other
- ❌ Use color alone to communicate meaning (always add text or icons)
- ❌ Make text smaller than 14px for body content (12px only for captions/metadata)
- ❌ Use `opacity: 0` instead of removing elements (screen readers still see them)
- ❌ Skip hover/focus states on interactive elements
- ❌ Use lorem ipsum in real UI — write realistic placeholder content
- ❌ Mix border-radius values arbitrarily (use the design system scale)
- ❌ Add decorative elements that don't serve the content hierarchy

### Figma Override — What NOT to do

- ❌ Keep Figma's hardcoded colors — ALWAYS replace with brand tokens
- ❌ Change the layout structure or element order from Figma — that's the whole point of using it
- ❌ Ignore Figma's spacing ratios — if Figma has 2× gap between title and body vs body and CTA, maintain that ratio with brand tokens
- ❌ Add elements that aren't in the Figma design (no extra decorations, icons, or sections unless asked)
- ❌ Remove elements that are in the Figma design (if it has a badge/overline, keep it)
- ❌ Use Figma's exact pixel values for spacing — snap to the brand's spacing scale instead
- ❌ Copy Figma's font family — always use the brand's font tokens
- ❌ Assume Figma shows all states — always add hover, focus, disabled, and error states even if Figma only shows the default

