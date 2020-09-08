(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Iq+p":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return b}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var a=t("/FXl"),r=t("TjRS");t("aD51");function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/hooks.mdx"}});var c={_frontmatter:s},u=r.a;function b(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(a.b)(u,l({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"hooks"},"Hooks"),Object(a.b)("hr",null),Object(a.b)("p",null,"The hooks provided by redash are here so you can create animation values, clocks, and event nodes that will keep their identity across component re-renders."),Object(a.b)("h2",{id:"usevalue"},Object(a.b)("inlineCode",{parentName:"h2"},"useValue()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useValue: <V extends string | number | boolean>(value: V) => Animated.Value<V>;\n")),Object(a.b)("p",null,"Creates an animation value which identity is preserved during the whole component lifecycle."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const toggle = useValue(0);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usevalues"},Object(a.b)("inlineCode",{parentName:"h2"},"useValues()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useValues: <V extends string | number | boolean>(values: V[]) => Animated.Value<V>[];\n")),Object(a.b)("p",null,"Creates an animation values which identity is preserved during the whole component lifecycle."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [toggle, state] = useValues(0, State.UNDETERMINED);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useclock"},Object(a.b)("inlineCode",{parentName:"h2"},"useClock()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useClock: () => Animated.Clock;\n")),Object(a.b)("p",null,"Creates a clock which identity is preserved during the whole component lifecycle."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const clock = useClock();\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"useclocks"},Object(a.b)("inlineCode",{parentName:"h2"},"useClocks()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useClocks: (numberOfClocks: number) => Animated.Clock[];\n")),Object(a.b)("p",null,"Creates clocks which identity is preserved during the whole component lifecycle."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [clock1, clock2, clock3] = useClocks(3);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usevector"},Object(a.b)("inlineCode",{parentName:"h2"},"useVector()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useVector: (x: number, y: number) => Vector<Animated.Value>;\n")),Object(a.b)("p",null,"Creates a vector which identity is preserved by ",Object(a.b)("inlineCode",{parentName:"p"},"deps"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const vector = useVector(width, height);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usegesturehandler"},Object(a.b)("inlineCode",{parentName:"h2"},"useGestureHandler()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useGestureHandler = (\n  nativeEvent: Parameters<typeof onGestureEvent>[0])\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const state = useValue(State.UNDETERMINED);\nconst gestureHandler = useGestureHandler({ state });\nreturn (\n  <TapGestureHandler {...gestureHandler}>\n  //...\n  </TapGestureHandler>\n)\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usepangesturehandler"},Object(a.b)("inlineCode",{parentName:"h2"},"usePanGestureHandler()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const usePanGestureHandler = () => {\n  position: Vector<Animated.Value<number>>,\n  translation: Vector<Animated.Value<number>>,\n  velocity: Vector<Animated.Value<number>>,\n  state: Animated.Value<State>,\n  gestureHandler: Animated.Node<number>\n};\n")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),'const {gestureHandler, state, translation} = usePanGestureHandler();\nreturn (\n  <PanGestureHandler {...gestureHandler}>\n    <Animated.View style={{ flex: 1, backgroundColor: "cyan", transform: [{ translateX: translation.x }] }} />\n  </PanGestureHandler>\n)\n')),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usepinchgesturehandler"},Object(a.b)("inlineCode",{parentName:"h2"},"usePinchGestureHandler()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const {gestureHandler, state, scale, focal} = usePanGestureHandler();\nreturn (\n  <PinchGestureHandler {...gestureHandler}>\n    <Image style={{ transform: [{ scale }] }} {...{source}} />\n  </PinchGestureHandler>\n);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usetapgesturehandler"},Object(a.b)("inlineCode",{parentName:"h2"},"useTapGestureHandler()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const {gestureHandler, position, absolutePosition} = useTapGestureHandler();\nreturn (\n  <TapGestureHandler {...gestureHandler}>\n    <Text>Tap me!</Text>\n  </TapGestureHandler>\n);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usediff"},Object(a.b)("inlineCode",{parentName:"h2"},"useDiff()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useDiff: (node: Animated.Node<number>) => Animated.Value<number>;\n")),Object(a.b)("p",null,"Returns a difference between the node value from the last frame and the current one.\n",Object(a.b)("inlineCode",{parentName:"p"},"useDiff")," works for every frame whereas ",Object(a.b)("inlineCode",{parentName:"p"},"diff")," works on every evaluation."),Object(a.b)("p",null,"Examples:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const [state, x, y] = useValues(State.UNDETERMINED, 0, 0);\nconst deltaX = useDiff(x);\nconst deltaY = useDiff(y);\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usedebug"},Object(a.b)("inlineCode",{parentName:"h2"},"useDebug()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const useDebug: (values: { [key: string]: Animated.Node<number> });\n")),Object(a.b)("p",null,"Examples:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"useDebug({\n  translateX,\n  translateY\n})\n")))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/hooks.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-hooks-mdx-4fa37bad5b22563315db.js.map