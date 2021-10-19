
export class EntityUtils {

  static merge4Update<E>(fromEntity: E, toUpdate: Partial<E>): Partial<E> {
    const keys: Array<keyof E> = Object.keys(fromEntity).map(x => x as keyof E);
    const result: any = {};
    for (const k of keys) {
      if(fromEntity[k] ! == undefined  ) {
        result[k] = toUpdate[k] !== undefined && toUpdate[k] !== fromEntity[k] ? toUpdate[k] : fromEntity
      } else if(toUpdate[k] !== undefined ){
        result[k] = toUpdate[k]
      }
    }

    return result;


  }

}