export type Nullable<T> = T | null | undefined;
export type KeyValuePair<V = any> = {
  [key: string]: V;
};

export type IdProvider = KeyValuePair<number>;

export type PropIndex = KeyValuePair<string>;

export type PageIndex = KeyValuePair<boolean>;

export interface Condition {
  value: any;
  condition: any;
  operator: string;
}
export interface Transform {
  name: string;
  conditions: Array<Condition>;
}

export interface Binding {
  type: string;
  path: string;
  format: any;
  transform?: Transform;
}

export interface Builder {
  service: KeyValuePair;
  id: string;
  rootClass: string;
  name: string;
  componentName: string;
  typeScript: boolean;
  hasLoggedInUserBindings: boolean;
  hasAppDataBindings: boolean;
  imports: KeyValuePair<boolean>;
  componentPrefix: string;
  variablePrefix: string;
  idProvider: IdProvider;
  dataProps: PropIndex;
  pageIds: PropIndex;
  dataClassNames: PropIndex;
  data: string[];
  methods: string[];
  computed: string[];
  styles: string[];
  showComment?: boolean;
  includeResourcesInProject: boolean;
  resourcesMap: KeyValuePair;
  formatBinding: (stringBinding: string, inlineTemplate: boolean) => string;
  formatData: (data: any, builder: Builder) => string;
  generateClick: (
    rp: IResponsiveProperty,
    propName: string,
    builder: Builder
  ) => string;
  rpContext: IResponsiveOptions;
  global?: KeyValuePair;
}

export type Breakpoint = "xs" | "sm" | "md";

export type HtmlState = "hover" | "selected" | "none";

export type HtmlStateSelector = "state:hover" | "state:selected" | "state:none";

export type HtmlStateEnum = {
  HOVER: HtmlStateSelector;
  NONE: HtmlStateSelector;
  SELECTED: HtmlStateSelector;
};

export interface HtmlStateDescendant {
  descendant?: boolean;
  selector: string;
}
export interface CommonHtmlStateItem {
  value: HtmlStateSelector;
  name: string;
  label: string;
  className: string;
  beforeSelector: string;
  codeGenerationPropertyName?: string;
  selectors: Array<HtmlStateDescendant>;
  cacheKey: string;
  getter: () => CommonHtmlStateItem;
}
export interface HtmlStateItem extends CommonHtmlStateItem {
  selector: string;
  subTitle: string;
  codeGenerationPropertyName: string;
  codeGenerationSelectors: Array<string>;
  getter: () => HtmlStateItem;
}

export type VirtualElementType =
  | "master-page-manager"
  | "page-manager"
  | "partial-manager"
  | "entity-manager"
  | "container"
  | "partial";
export type VirtualElementTypeEnum = {
  MasterPageManager: VirtualElementType;
  PageManager: VirtualElementType;
  PartialManager: VirtualElementType;
  EntityManager: VirtualElementType;
  Container: VirtualElementType;
  Partial: VirtualElementType;
};

export type SerializableOptions = KeyValuePair;

export interface ISservice {
  owner: string;
  name: string;
  title: string;
  uniqueName: string;
}

export interface IVirtualElement {
  root?: IVirtualElement;
  main?: IVirtualElement;
  parent?: IVirtualElement;
  originalModel?: KeyValuePair;
  service?: ISservice;

  id: string;
  path?: string;
  type?: VirtualElementType;
  items?: Array<IVirtualElement>;
  property?: ISchemaProperty;

  field: KeyValuePair;
  options: SerializableOptions;

  data: any;
  parentData?: any;

  label?: string;
  pathLabel?: string;

  isPartialManager?: boolean;
  isPageManager?: boolean;
  isMasterPageManager?: boolean;
  isEntityManager?: boolean;

  isRoot?: boolean;
  isMain?: boolean;

  isPage?: boolean;
  isEntityDisplay?: boolean;
  isMasterPage?: boolean;
  isPartial?: boolean;

  hasSchema?: boolean;
  schema?: ISchema;

  canBeMasterPage?: boolean;

  disposed?: boolean;

  isNormalPage?: () => boolean;
  isHomePage?: () => boolean;
  isWelcomePage?: () => boolean;
  isProtectedPage?: () => boolean;
  is404Page?: () => boolean;
  isLoginPage?: () => boolean;
}

export interface ISchema {
  nameSpace: string;
  name: string;
  id: string;
  fields: KeyValuePair<ISchemaProperty>;
  properties: Array<ISchemaProperty>;
  propertiesIndex: Array<string>;

  disposed: boolean;

  getDisplayInItem: (options: IResponsiveOptions) => IDisplayInItem;
}

export interface IDisplayInItem {
  responsiveProperty: IResponsiveProperty;
  displayItems: Array<() => IDisplayItem>;
}

export interface IDisplayItem {
  property: ISchemaProperty;
  responsiveProperty: IResponsiveProperty;
  originalResponsiveProperty: IResponsiveProperty;
}
export interface ICheckType {
  isPrimitive: boolean;
  isDecimal: boolean;
  isInteger: boolean;
  isNumeric: boolean;
  isNumber: boolean;
  isGuid: boolean;
  isDateTime: boolean;
  isDate: boolean;
  isBoolean: boolean;
  isBinary: boolean;
  isString: boolean;
  isObject: boolean;
  isArray: boolean;
  isCommand: boolean;
  isNavigationPropertyList: boolean;
  isNavigationProperty: boolean;
}
export interface ISchemaPropertyType extends ICheckType {
  name: string;
  icon: Nullable<string>;
  edmName?: string;
  isEdmType: boolean;
}

export interface ITemplateItem {
  name: string;
}
export interface ISchemaProperty extends ICheckType {
  id: string;
  name: string;
  schema: ISchema;
  service: ISservice;
  originalField: KeyValuePair;

  isNullable: boolean;
  isRequired: boolean;
  clearable: boolean;

  options: SerializableOptions;

  virtualElement?: IVirtualElement;
  mainElement?: IVirtualElement;
  parentElement?: IVirtualElement;
  partial?: IVirtualElement;
  isContainer: boolean;

  type: ISchemaPropertyType;
  clientType: ISchemaPropertyType;

  sharedLabel: string;
  templateItem: ITemplateItem;
  excludeFromCodeGenerationOptions: boolean;

  linkedToProperties?: string[];

  disposed: boolean;

  toResponsiveProperty: (options: IResponsiveOptions) => IResponsiveProperty;
  toStateProperty: (options: IStateOptions) => IStateProperty;
  getter: (entity?: KeyValuePair, binding?: Binding, context?: any) => any;
  defaultValue: (
    bindingContext?: KeyValuePair,
    noDynamicExecution?: boolean
  ) => any;
}
export interface IDisplayFieldOptions {
  editMode: boolean;
  display: string;
}
export interface IResponsiveOptions extends IDisplayFieldOptions {
  breakpoint: Breakpoint;
}

export interface IStateOptions extends IResponsiveOptions {
  state: HtmlStateSelector;
}
export interface IDisplayField extends IDisplayFieldOptions {
  virtualElement: IVirtualElement;
  property: ISchemaProperty;
}

export interface IClassesData {
  $data: KeyValuePair;
  $managedData: KeyValuePair;
  $transitions: KeyValuePair;
}
export interface IResponsiveProperty extends IResponsiveOptions {
  id: string;
  key: string;
  name: string;

  virtualElement: IVirtualElement;
  property: ISchemaProperty;
  service: ISservice;
  classes: IClassesData;

  label: string;
  seo?: string;
  alt?: string;
  canOverflow: boolean;
  order: number;
  inheritState: boolean;
  lazy: boolean;
  lazyPreloadData: boolean;
  lazyThreshold: number;
  lazyThrottle: number | string;
  lazyOnce: boolean;
  keepAlive: boolean;
  click: ClickActions;
  formMode: boolean;
  flexDirection?: string;
  overflow?: string;
  animation?: string;
  animationIn?: string;
  animationOut?: string;
  hasTransform: boolean;
  bgType?: string;
  tooltip?: string;
  labelPosition?: string;
  componentConfigSchema?: ISchema;
  componentItem: { input: boolean };

  "state:hover": IStateProperty;
  "state:selected": IStateProperty;
  "state:none": IResponsiveProperty;

  getValue: (
    configProperty: ISchemaProperty | string,
    bindingContext: any,
    getterOptions: any
  ) => any;
  getOptionsValue: (
    configProperty: ISchemaProperty | string,
    widthOpposite?: boolean
  ) => any;
  getOwnConfigValue: (configProperty: ISchemaProperty | string) => any;
}
export interface IStateProperty extends IResponsiveProperty {
  responsiveProperty: IResponsiveProperty;
  state: HtmlStateSelector;
}

export interface ICssProcessor {
  slots: string[];
}

export type UpdateElementAction = {
  values?: KeyValuePair;
  element?: KeyValuePair;
};

export type PageNavigationAction = {
  page?: string;
  queries?: Array<{ name: string; value: string }>;
  transition?: string;
};

export type ExternalNavigationAction = {
  url?: string;
};

export type AnchorAction = {
  anchor?: { id: string };
};

export type ClickActionBase = {
  type: string;
};

export type ClickAction = ClickActionBase &
  UpdateElementAction &
  PageNavigationAction &
  ExternalNavigationAction &
  AnchorAction;

export type ClickActions = ClickAction | ClickAction[];
