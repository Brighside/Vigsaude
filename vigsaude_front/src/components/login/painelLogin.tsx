import { Input } from "../commons/input"
import "../../styles/components/login.css"

export const PainelLogin = () => {
    return (
        <div className="loginConteiner">
            <div className="viglogoConteiner">
                <img src="/img/logo_vig.png" alt="Logo do Vigsaúde"/>
                <p>Aplicativo para a saúde pública</p>
            </div>
            <div className="inputConteiner">
                <Input type="text" placeholder="Nome de Usuário"/>
                <Input type="password" placeholder="Senha" />
                <div className="opcaoSenha">
                    <input type="checkbox"  id="manterLogado"/>
                    <label htmlFor="manterLogado">Manter logado</label>
                    <a href="http://">Esqueci minha senha</a>
                </div>
            </div>
            <div className="logosConteiner">
                <a href="http://www.ensp.fiocruz.br/portal-ensp/departamento/csegsf" target="_blank" >
                    <img src="/img/logo_csegs.png" 
                    alt="Logo do centro escola de saúde Germano Sinval Faria"/>
                </a>
                <a href="https://ensp.fiocruz.br/" target="_blank" >
                    <img src="/img/logo_ensp.png" 
                    alt="Logo da escola nacional de saúde pública Sergio Arouca"/>
                </a>
                <a href="https://portal.fiocruz.br/" target="_blank" >
                    <img src="/img/logo_fiocruz.png" alt="Logo da Fiocruz"/>
                </a>
            </div>
        </div>
    )
}