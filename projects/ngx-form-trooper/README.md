# NgxFormTrooper

A library built around Angular's reactive forms to reduce boilerplate and ease testing.

This package provides services, instances and components.

## Setup
You must have imported `BrowserNoopModule` or `NoopAnimationsModule` for this library to work. It does not include these modules to allow for lazy-loading.

## Changing the default styles

Default styles of the form can be overriden with CSS variables.

| CSS Variable                       | Default Value                     | Function                                |
| ---------------------------------- | --------------------------------- | --------------------------------------- |
| `--color-form-input-border`        | `rgba(#1c80dc, 65%)` (light blue) | Input border color                      |
| `--color-form-input-border--error` | `#fc8181` (light red)             | Input border color when errored         |
| `--color-form-input-label`         | `#2b6cb0` (darker blue)           | Label color for each input              |
| `--color-form-input-label--error`  | `#c53030` (darker red)            | Label color for each input when errored |
| `--form-input-border-radius`       | `5px`                             | Border radius for each form input       |
