/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/App` | `/_sitemap` | `/components/EquipoCard` | `/components/JugadorCard` | `/components/PartidoCard` | `/components/UsuarioCard` | `/navigation/AppNavigator` | `/screens/EquiposScreen` | `/screens/EstadisticasScreen` | `/screens/HomeScreen` | `/screens/JugadoresScreen` | `/screens/PartidosScreen` | `/screens/UsuariosScreen`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
