<?php

/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2015 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Application\Model\IndexModel;

class IndexController extends AbstractActionController {

    public function indexAction() {
        return new ViewModel();
    }

    public function foroAction() {
        sleep(4);
        $view = new ViewModel();
        $view->setTerminal(true);
        return $view;
    }
    
     public function galleryAction() {
        sleep(4);
        $model = new IndexModel();
        $view = new ViewModel($model->GetGallery());
        $view->setTerminal(true);        
        return $view;
    }

}
