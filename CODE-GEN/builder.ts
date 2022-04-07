import { APP_PREFIX } from "./constants";
import { Builder, KeyValuePair } from "./types";

/**
 * Generate a builder object from a virtual element
 * @param {any} virtualElement - the virtual element that we're generating a builder for
 * @param {KeyValuePair} context - KeyValuePair
 * @returns A builder object that contains all the information needed to generate a component.
 */
export function generateBuilder(virtualElement: any, context: KeyValuePair) {
  const mainElement = virtualElement.main || virtualElement;
  const name = ""; //normalizedJsName(virtualElement.label);
  const builder: Builder = {
    service: mainElement.service,
    id: mainElement.id,
    rootClass: `${APP_PREFIX}-${mainElement.id}`,
    name,
    typeScript: true,
    componentName: `${APP_PREFIX}${name}`,
    idProvider: {},
    includeResourcesInProject: false,
    hasLoggedInUserBindings: false,
    hasAppDataBindings: false,
    imports: {},
    componentPrefix: APP_PREFIX,
    variablePrefix: "k",
    dataProps: {},
    pageIds: {},
    dataClassNames: {},
    data: [],
    methods: [],
    computed: [],
    styles: [],
    resourcesMap: {},
    rpContext: {
      editMode: true,
      display: "default",
      breakpoint: "md",
    },
    formatBinding: (stringBinding: string) => stringBinding,
    formatData: () => "formatData not implemented",
    generateClick: () => "generate click not implemented",
    ...context,
  };
  return builder;
}
